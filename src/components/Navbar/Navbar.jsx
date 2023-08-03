import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Piyush</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="work" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              {" "}
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              {" "}
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <button className="button n-btn">Contact </button>
      </div>
    </div>
  );
}
