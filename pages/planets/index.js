/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import axios from "axios";
import styles from "../../styles/componentStyles/planets/Planets.module.css";
const Planets = () => {
  const options = {
    method: "GET",
    url: "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list",
    headers: {
      "X-RapidAPI-Key": "1a29bb8f5bmsh58da167d06514b2p18f8b3jsn5c52866062cf",
      "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com"
    }
  };

  const getPlanets = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getPlanets();
  }, []);
  return (
    <>
      <div></div>
    </>
  );
};

export default Planets;
