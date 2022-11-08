import Image from "next/image";
import React from "react";
import styles from "../../../styles/componentStyles/Navbar/Navbar.module.css";
import logoFull from "../../../styles/assets/website-logo-full.png";
import { IoEarth } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
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
        <Link href={"/"}>
          <Image
            src={logoFull}
            alt="Website Logo"
            width={190}
            height={90}
            className={styles.navBrand}
          />
        </Link>
        <div className={styles.navLinkWrapper}>
          <Link href="/">
            <div className={styles.navLinks}>
              <IoEarth />
              <p data-text="HOME">HOME</p>
            </div>
          </Link>

          <Link href="/#about">
            <div className={styles.navLinks}>
              <BsFillInfoCircleFill />
              <p data-text="ABOUT">ABOUT</p>
            </div>
          </Link>

          <div className={styles.navLinks} onClick={handleNewsDrop}>
            <FaNewspaper />
            <p data-text="NEWS">NEWS</p>
            <div className={styles.dropdown}>
              <button>
                <IoMdArrowDropdown size={"18px"} />
              </button>
              <div className={styles.dropdownContent} id="newsDrop">
                <Link href={"/space-news"}>
                  <span>Space News</span>
                </Link>
                <Link href={"/#apod"}>
                  <span>Astronomy Picture of the Day</span>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.navLinks} onClick={handleInterDrop}>
            <GiInterstellarPath />
            <p data-text="INTERSTELLAR">INTERSTELLAR</p>
            <div className={styles.dropdown}>
              <button>
                <IoMdArrowDropdown size={"18px"} />
              </button>
              <div className={styles.dropdownContent} id="interDrop">
                <Link href={"/"}>
                  <span>Planets</span>
                </Link>
                <Link href={"/"}>
                  <span>Mars Rover Pics</span>
                </Link>
                <Link href={"/"}>
                  <span>Space Mission Launch Sites and Rockets</span>
                </Link>
                <Link href={"/"}>
                  <span>JWST Pictures and Data</span>
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
