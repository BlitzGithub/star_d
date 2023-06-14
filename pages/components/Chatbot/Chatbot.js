import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from "@chatscope/chat-ui-kit-react";
import styles from "../../../styles/componentStyles/Chatbot/Chatbot.module.css";

const Chatbot = () => {
  const currHour = new Date().getHours();
  const [messages, setMessages] = useState([
    {
      message: `${
        currHour >= 5
          ? currHour < 12
            ? "Good Morning!"
            : currHour < 16
            ? "Good Afternoon!"
            : "Good Evening!"
          : "Good Evening!"
      }\nWelcome to Stardust. \nI am <b>SD-47</b> and I am here to help you find answers about any queries you may have about the universe.\nBe it about stars, black holes, quasars or anything related to the cosmos.`,
      sender: "chatbot"
    }
  ]);
  const [typing, setTyping] = useState(false);
  const API_KEY = "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";

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    };

    const newMessages = [...messages, newMessage];

    // update message state
    setMessages(newMessages);

    //typing indicator
    setTyping(true);

    // send prompt to chatGPT
    await fetchResults(newMessages);
  };

  async function fetchResults(chatMessasges) {
    let apiMessages = chatMessasges.map((messageObj) => {
      let role = "";
      if (messageObj.sender === "chatbot") {
        role = "assistant";
      } else {
        role = "user";
      }

      return { role: role, content: messageObj.message };
    });

    const systemMessage = {
      role: "system",
      content:
        "Answer the questions like an expert explaining to a child using examples. Only answer questions related to the following topics - astronomy, cosmology, quantum physics, universe, outer space, physics."
    };

    const apiRequest = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages]
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequest)
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data.choices[0].message.content);
        setMessages([
          ...chatMessasges,
          {
            message: data.choices[0].message.content,
            sender: "chatbot"
          }
        ]);
        setTyping(false);
      });
  }

  return (
    <>
      <div className={styles.mainWrapper}>
        <MainContainer className={styles.chatContainer}>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                typing ? <TypingIndicator content="Fetching Results" /> : null
              }
            >
              {messages.map((message, index) => {
                return <Message key={index} model={message} />;
              })}
            </MessageList>
            <MessageInput
              placeholder="Ask Me Anything"
              onSend={handleSend}
              className={styles.inputContainer}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </>
  );
};

export default Chatbot;
