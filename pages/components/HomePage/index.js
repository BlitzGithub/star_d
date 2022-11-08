/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import axios from "axios";
import styles from "../../../styles/componentStyles/HomePage/HomePage.module.css";
import logo from "../../../styles/assets/website-logo-full.png";
import Image from "next/image";
import { useState } from "react";
import "animate.css";

const HomePage = () => {
  const [apod, setApod] = useState([]);
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=vwGYTF3JdClisN4UomGCbeul2ysQB5DpXxtbpiwr";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setApod(response.data);
        console.log(apod);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={styles.mainWrapper} id="home">
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
            src={apod.url}
            // src={"https://avatars.dicebear.com/api/male/123.svg"}
            alt="APOD"
            width={100}
            height={100}
            priority
            id="apodPic"
          />
        </div>
        <p>{apod.explanation}</p>
      </div>
    </>
  );
};

export default HomePage;
