import React, { useState } from "react";
import styles from "../../../styles/componentStyles/planets/Planets.module.css";
import planets from "../../utilities/planets";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import { BounceLoader } from "react-spinners";
import Image from "next/image";

const Carousel = () => {
  console.log(planets);
  const [index, setIndex] = useState(0);
  const handleLeft = () => {
    if (index === 0) {
      setIndex(planets.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const handleRight = () => {
    if (index === planets.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  // setTimeout(() => {
  //   handleRight();
  // }, 5000);
  return (
    <>
      <div className={styles.carouselWrapper}>
        <BiLeftArrow className={styles.leftBtn} onClick={handleLeft} />
        <div className={styles.carouselData}>
          {
            <>
              <Image
                src={planets[index].imgSrc[0].img}
                alt={planets[index].name}
                width={400}
                height={300}
                priority
              />
              <p>{planets[index].description}</p>
            </>
          }
        </div>
        <BiRightArrow className={styles.rightBtn} onClick={handleRight} />
      </div>
    </>
  );
};

export default Carousel;
