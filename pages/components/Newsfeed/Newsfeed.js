/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../../styles/componentStyles/space-news/SpaceNews.module.css";
const Newsfeed = ({ title, summary, media, link }) => {
  const summaryShort = summary.slice(0, 300) + "...";
  const titleShort = title.slice(0, 77) + "...";
  return (
    <>
      <div className={styles.newsFeedPost}>
        <div className={styles.newsFeedImg}>
          <img src={media} alt="..." className={styles.image} />
        </div>
        <p>
          <strong>{title.length < 30 ? title : titleShort}</strong>
          <br />
          <br />
          {summary.length < 300 ? summary : summaryShort}
        </p>
      </div>
      <button
        onClick={() => {
          window.open(link, "_blank");
        }}
        className={styles.newsFeedBtn}
      >
        Read More
      </button>
    </>
  );
};

export default Newsfeed;
