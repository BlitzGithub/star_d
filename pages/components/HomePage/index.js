/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import axios from "axios";
import styles from "../../../styles/componentStyles/HomePage/HomePage.module.css";
import logo from "../../../styles/assets/website-logo-full.png";
// import { AiFillCaretRight } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import "animate.css";

const HomePage = () => {
  const [apod, setApod] = useState([]);
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=vwGYTF3JdClisN4UomGCbeul2ysQB5DpXxtbpiwr";

  let index = [],
    fIndex;
  useEffect(() => {
    axios.get(url).then((response) => {
      setApod(response.data);
      fIndex = handleDesc(apod.explanation);
      console.log(response.data);
    });
    // .catch((error) => {
    //   console.log(error);
    // });
  }, []);

  function handleDesc(desc) {
    for (let i = desc.length; i >= 0; i--) {
      if (desc[i] == ".") {
        index.push(i);
      }
      if (index.length == 3) break;
    }
    return index.at(3);
  }
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
        <Image
          // src={apod.url}
          src={"https://avatars.dicebear.com/api/male/123.svg"}
          alt="APOD"
          className={styles.apodPic}
          width={50}
          height={50}
          priority
        />
        <p>{apod.explanation.slice(0, fIndex)}</p>
      </div>
    </>
  );
};

export default HomePage;
