/* eslint-disable react-hooks/exhaustive-deps */
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/componentStyles/space-news/SpaceNews.module.css";
import Newsfeed from "../components/Newsfeed/Newsfeed";
import { SPACE_NEWS_API_URL, SPACE_NEWS_API_KEY } from "../../config";

const SpaceNews = () => {
  const [articles, setArticles] = useState([]);
  const getData = async () => {
    const options = {
      method: "GET",
      url: "https://newscatcher.p.rapidapi.com/v1/search_free",
      params: {
        q: "space",
        lang: "en",
        page: "1",
        page_size: "30",
        media: "True"
      },
      headers: {
        "X-RapidAPI-Key": "1a29bb8f5bmsh58da167d06514b2p18f8b3jsn5c52866062cf",
        "X-RapidAPI-Host": "newscatcher.p.rapidapi.com"
      }
    };

    try {
      const response = await axios.request(options);
      setArticles(response.data.articles);
      for (let i = 0; i < articles.length; i++) {
        console.log(articles[i].author);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Stardust - Space News";
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
