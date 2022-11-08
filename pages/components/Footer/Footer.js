import Image from "next/image";
import React from "react";
import logoFull from "../../../styles/assets/website-logo-full.png";
import styles from "../../../styles/componentStyles/Footer/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footerWrapper}>
        <div className={styles.footerLeft}>
          <Image src={logoFull} alt="Logo" />
        </div>
        <div className={styles.footerRight}>
          <div>
            <a href="#apod">
              <p>Space News</p>
            </a>
            <a href="#apod">
              <p>Astronomy Picture of the Day</p>
            </a>
          </div>
          <div>
            <a href="#apod">
              <p>Planets</p>
            </a>
            <a href="#apod">
              <p>Mars Rover</p>
            </a>
            <a href="#apod">
              <p>Launch Sites and Rockets</p>
            </a>
            <a href="#apod">
              <p>James Webb Space Telescope</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
