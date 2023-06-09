import React from "react";
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
// import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, Welcome to Stardust",
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
      content: "Answer the questions like an expert using exmaples"
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
