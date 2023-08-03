import React, { useContext } from "react";
import "./Work.css";
import Upwork from "../../img/Upwork.png";
import Amazon from "../../img/amazon.png";
import Fiverr from "../../img/fiverr.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export default function Work() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="work">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          hello world since the 1500s, when an unknown printer took a galley of
          type and scrambled it
          <br />
          hello world since the 1500s hello world since the 1500s
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </span>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button s-btn">Hire me</button>
        </Link>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-main-circle"
        >
          <div className="w-sec-circle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-sec-circle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-sec-circle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-sec-circle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-sec-circle">
            <img src={Shopify} alt="" />
          </div>
        </motion.div>

        <div className="w-back-circle blue-circle"></div>
        <div className="w-back-circle yellow-circle"></div>
      </div>
    </div>
  );
}
