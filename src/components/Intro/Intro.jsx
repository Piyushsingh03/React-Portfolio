/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesEmoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
export default function Intro() {
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I'm </span>
          <span>Piyush Singh</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and developement, producing the quality work
          </span>
        </div>
        <button className=" button i-btn">Hire Me</button>
        <div className="i-icons">
          <a href="">
            <img src={Github} alt="" />
          </a>
          <a href="">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-10%" }}
          transition={transition}
          src={glassesEmoji}
          alt=""
        />

        <div>
          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "148%" }}
            transition={transition}
            className="img-div floating-div"
          >
            <FloatingDiv image={Crown} text1={"Web"} text2={"Development"} />
          </motion.div>

          <motion.div
            initial={{ left: "9rem", top: "14.5rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            className="img-div-2 floating-div"
          >
            <FloatingDiv image={thumbup} text1={"Web"} text2={"Design"} />
          </motion.div>

          <div>
            <div
              className="blur"
              style={{ background: "rgb(238 210 255)" }}
            ></div>
            <div
              className="blur"
              style={{
                background: "#C1F5FF",
                top: "16rem",
                width: "21rem",
                left: "-7rem",
                height: "11rem",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
