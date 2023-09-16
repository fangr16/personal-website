// dependancies
import React from "react";
import {
  Grid,
  Typography,
  Divider,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import avatar from "./Photo.png";
import Resume from "../Home/resume.pdf";

// icons
import { FaRegFilePdf } from "react-icons/fa";

// file imports
import AboutStyles from "./AboutStyles";

const About = () => {
  // classes and queries
  const classes = AboutStyles();
  const md = useMediaQuery("(max-width: 960px)");
  const lg = useMediaQuery("(min-width: 960px)");

  return (
	<div className={classes.background}>
    <Grid id="about" container>
        {/* Title */}
        <Grid className={classes.title} item xs={12}>
          <br />
          <Typography variant="h2">&#8212;&nbsp;&nbsp; About &nbsp;&nbsp;&#8212;</Typography>
          <br />
          <br />
        </Grid>
        <Grid item xs={1}></Grid>
        {md && <Grid item xs={1}></Grid>}
        <Grid item xs={10} md={5}>
          <div className={classes.picSpacing}>
            <img
              alt="Display"
              src={avatar}
              className={classes.profilePic}
            ></img>
          </div>
          <br />
          <br />
          <br />
        </Grid>
        {md && <Grid item xs={1}></Grid>}

        {/* Text */}
        <Grid item xs={10} md={5}>
          <br />
          <Typography
            variant="h6"
            className={classes.subTitle}
            display="inline"
          >
            My name is Ray Fang, a Master's student majoring Computer Science
          </Typography>
          {/* <Typography
            variant="h6"
            style={{ color: "#175fca" }}
            className={classes.subTitle}
            display="inline"
          >
            {" "}
            Software Developer
          </Typography> */}
          <div style={{ paddingBottom: "2%" }} />
          <Typography variant="body1">
            
          I am currently enrolled in the MCS program at UIUC. I am actively seeking a full time position in software development or machine learning in spring 2024 after graduating in winter 2023. I am willing to work anywhere globally. Some of my hobbies are playing and making video games, pixel art, learning foreign languages, and exploring cutting-edge machine learning and artificial intelligence technologies. For more information about my experience and projects, please check out the following pages!{" "}
            {/* <b> Currently, I am seeking internships for Summer 2024.</b> */}
          </Typography>
          <br />
          <Divider />
          <br />

          {/* Buttons */}
          {lg && (
            <a
              rel="noreferrer"
              target="_blank"
              href={Resume}
              className={classes.links}
            >
              <div>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                  startIcon={<FaRegFilePdf />}
                >
                  Resume
                </Button>
              </div>
            </a>
          )}
          {md && (
            <a
              rel="noreferrer"
              target="_blank"
              href={Resume}
              className={classes.links}
            >
              <div>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.buttonMobile}
                  startIcon={<FaRegFilePdf />}
                >
                  Resume
                </Button>
              </div>
            </a>
          )}
        </Grid>
        {md && <Grid item xs={1}></Grid>}

        {/* Bottom */}
        <Grid item xs={12}>
          <div style={{ paddingBottom: "7%" }} />
        </Grid>
    </Grid>
	</div>
  );
};

export default About;
