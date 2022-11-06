import Image from "next/image";
import React from "react";
import styles from "../../../styles/componentStyles/Navbar/Navbar.module.css";
import logoFull from "../../../styles/assets/website-logo-full.png";
import PublicIcon from "@mui/icons-material/Public";
import InfoIcon from "@mui/icons-material/Info";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { GiInterstellarPath } from "react-icons/gi";
import Link from "next/link";

const Navbar = () => {
  const handleNewsDrop = () => {
    document.getElementById("newsDrop").classList.toggle(styles.show);
  };
  const handleInterDrop = () => {
    document.getElementById("interDrop").classList.toggle(styles.show);
  };

  return (
    <>
      <div className={styles.navbarWrapper}>
        <Link href={"#home"}>
          <Image
            src={logoFull}
            alt="Website Logo"
            width={190}
            height={90}
            className={styles.navBrand}
          />
        </Link>
        <div className={styles.navLinkWrapper}>
          <div className={styles.navLinks}>
            <PublicIcon />
            <a href="#home">
              <p>HOME</p>
            </a>
          </div>

          <a href="#about">
            <div className={styles.navLinks}>
              <InfoIcon />
              <p>ABOUT</p>
            </div>
          </a>

          <div className={styles.navLinks} onClick={handleNewsDrop}>
            <NewspaperIcon />
            <p>NEWS</p>
            <div className={styles.dropdown}>
              <button>
                <ArrowDropDownIcon />
              </button>
              <div className={styles.dropdownContent} id="newsDrop">
                <Link href={"/"}>
                  <a>Space News</a>
                </Link>
                <Link href={"#apod"}>
                  <a>Astronomy Picture of the Day</a>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.navLinks} onClick={handleInterDrop}>
            <GiInterstellarPath />
            <p>INTERSTELLAR</p>
            <div className={styles.dropdown}>
              <button>
                <ArrowDropDownIcon />
              </button>
              <div className={styles.dropdownContent} id="interDrop">
                <Link href={"/"}>
                  <a>Planets</a>
                </Link>
                <Link href={"/"}>
                  <a>Mars Rover Pics</a>
                </Link>
                <Link href={"/"}>
                  <a>Space Mission Launch Sites and Rockets</a>
                </Link>
                <Link href={"/"}>
                  <a>JWST Pictures and Data</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
