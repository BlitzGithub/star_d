/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/componentStyles/HomePage/HomePage.module.css";
import logo from "../../styles/assets/website-logo-full.png";
import Image from "next/image";
import "animate.css";
import Chatbot from "../components/Chatbot/Chatbot";
// import Modal from "@mui/material/Modal";

const HomePage = () => {
  const [apod, setApod] = useState([]);
  const [open, setOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log(open);
  };
  const handleClose = () => {
    setOpen(false);
    console.log(open);
  };
  const handleShowChatbot = () => {
    console.log(showChatbot);
    setShowChatbot(!showChatbot);
    console.log(showChatbot);
  };
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=aH9UQKu6dcdoZWbM9LdfGnj4oGBhcWBUAQraxL5v&count=1";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setApod(response.data);
        console.log("apod data:");
        console.log(apod);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={styles.mainWrapper} id="home">
        {showChatbot ? (
          <div className={styles.chatbotWrapper}>
            <button
              onClick={() => {
                handleShowChatbot();
              }}
              className={styles.chatbotclose}
            >
              Close
            </button>
            <Chatbot />
          </div>
        ) : (
          <button
            className={styles.chatbotOpen}
            onClick={() => {
              handleShowChatbot();
            }}
          >
            SD-47
          </button>
        )}
        <h1>
          WELCOME TO <br />
        </h1>
        <Image src={logo} alt={"Logo"} />
      </div>

      <div className={styles.introWrapper} id="about">
        <h2>
          Hello, Space Enthusiasts. This platform was built by a Space Nerd in
          order to connect, share and learn with his fellow Space Nerds about
          the new discoveries of the ever-changing universe. Be it the discovery
          of a new interstellar celestial object or recording of the sound of a
          black hole or debunking the myths around the start of the universe,
          this platform has everything to quench your thirst of knowledge about
          the infinite universe.
          <br />
          <br />
          This stage offers learning, new discoveries, refining your already
          gained knowledge and connecting with your fellow enthusiasts.
        </h2>

        <div className={styles.explore}>
          <button>
            <i></i>
            <span>Explore</span>
          </button>
        </div>
      </div>

      <div className={styles.apodWrapper} id="apod">
        <h1>ASTRONOMICAL PICTURE OF THE DAY</h1>
        <h3>{apod.title}</h3>
        <div className={styles.apodPic}>
          <Image
            src={apod.hdurl}
            alt="APOD"
            width={310}
            height={310}
            priority={true}
            id="apodPic"
            style={{ cursor: "pointer" }}
            onClick={handleOpen}
          />
        </div>
        <p>{apod.explanation}</p>
        <div>
          <Image
            src={apod.hdurl}
            alt="APOD"
            width={1000}
            height={510}
            priority={true}
            id="apodPic"
            style={{ cursor: "pointer" }}
            onClick={handleOpen}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
