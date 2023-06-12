import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/componentStyles/mars-rover/MarsRover.module.css";
import { roverCameras, roverAbout } from "../../styles/assets/dataStore";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";

const MarsRover = () => {
  const [cam, setCam] = useState("fhaz");
  const [pics, setPics] = useState([]);
  const handleChange = (event) => {
    console.log(event.target.value);
    setCam(event.target.value);
  };

  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=900&camera=${cam}&api_key=aH9UQKu6dcdoZWbM9LdfGnj4oGBhcWBUAQraxL5v`;

  const getPhotos = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: url,
      headers: {}
    };

    await axios
      .request(config)
      .then((response) => {
        setPics(response.data.photos);
        for (let index = 0; index < pics.length; index++) {
          console.log(pics[index].img_src);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <>
      <div className={styles.mroverWrapper}>
        <div className={styles.mrAbout}>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "1px solid rgba(255,255,255,0.7)",
              borderBottom: "none"
            }}
          >
            <AccordionSummary
              sx={{ borderBottom: "1px solid rgba(255,255,255,0.7)" }}
            >
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "22px",
                  fontFamily: "Bebas Neue",
                  letterSpacing: "5px"
                }}
              >
                ABOUT MARS ROVER MISSION
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ borderBottom: "1px solid rgba(255,255,255,0.7)" }}
            >
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "justify",
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: "1px",
                  fontFamily: "Play",
                  wordSpacing: "4px"
                }}
              >
                {roverAbout}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className={styles.cameraSelect}>
          <Box sx={{ width: 500 }}>
            <FormControl>
              <InputLabel
                id="demo-simple-select-label"
                sx={{ color: "rgba(255,255,255,0.8)" }}
              >
                Cam
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cam}
                label="Cam"
                autoWidth
                onChange={handleChange}
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.8)"
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.8)"
                  },
                  ".MuiSvgIcon-root ": {
                    fill: "white !important"
                  }
                }}
              >
                {roverCameras.map((ele) => {
                  return (
                    <MenuItem
                      value={ele.abbr}
                      key={ele.abbr}
                      sx={{ background: "rgba(255,255,255,0.7)" }}
                    >
                      {ele.fullname.toUpperCase()}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className={styles.roverPics}>
          {pics.map((ele) => {
            return (
              <div key={ele.id} className={styles.picsContent}>
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: "var(--black)"
                    // background: "transparent"
                  }}
                >
                  <Link
                    href={ele.img_src}
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardMedia sx={{ height: "80%" }} image={ele.img_src} />
                  </Link>
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontFamily: "Bebas Neue",
                        color: "var(--white)"
                      }}
                    >
                      This picture was taken on {ele.earth_date} by the{" "}
                      {ele.rover.name} rover using the {ele.camera.full_name}.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MarsRover;
