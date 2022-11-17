/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styles from "../../styles/componentStyles/planets/Planets.module.css";
import Carousel from "../utilities/carousel/carousel";
const Planets = () => {
  return (
    <>
      <div className={styles.planetWrapper}>
        <Carousel />
      </div>
    </>
  );
};

export default Planets;
