/* eslint-disable react-hooks/exhaustive-deps */
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/componentStyles/space-news/SpaceNews.module.css";
import Newsfeed from "../components/Newsfeed/Newsfeed";

const SpaceNews = () => {
  const [articles, setArticles] = useState([]);
  const getData = () => {
    const options = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: { q: "space", lang: "en", page: "2", page_size: "25" },
      headers: {
        "X-RapidAPI-Key": "1a29bb8f5bmsh58da167d06514b2p18f8b3jsn5c52866062cf",
        "X-RapidAPI-Host": "free-news.p.rapidapi.com"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setArticles(response.data.articles);
        console.log(articles);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={styles.snewsWrapper}>
        <p>
          &quot;Earth is a small town with many neighborhoods in a very big
          universe.&quot; &ndash; Ron Garan
        </p>
        <div className={styles.blogFeed}>
          {articles.map((element) => {
            return (
              <Newsfeed
                key={element.link}
                title={element.title}
                summary={element.summary}
                media={element.media}
                link={element.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SpaceNews;