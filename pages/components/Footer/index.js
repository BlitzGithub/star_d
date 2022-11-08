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
            <p>Space News</p>
            <p>Astronomy icture of the Day</p>
          </div>
          <div>
            <p>Planets</p>
            <p>Mars Rover</p>
            <p>Launc Sites and Rockets</p>
            <p>James Webb Space Telescope</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
