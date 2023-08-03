import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import resume from "./resume.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

export default function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services">
      {/* left side */}

      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          hello world since the 1500s, when an unknown printer took a galley of
          type and scrambled it
        </span>

        <a href={resume} download>
          <button className="button s-btn">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}

      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            text={"Figma, Sketch, Photoshop, Adobe, Adobe xd, Canvas."}
          />
        </motion.div>

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            text={
              "HTML/CSS, JavaScript, React,  Node.js, jQuery, tailwind, bootstrap, MongoDB, MySQL, and others."
            }
          />
        </motion.div>

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            text={
              "hello world since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting"
            }
          />

          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </motion.div>
      </div>
    </div>
  );
}
