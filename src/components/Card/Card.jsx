import React from "react";
import "./Card.css";
export default function Card({ emoji, heading, text }) {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{text}</span>
      <button className="c-btn">LEARN MORE</button>
    </div>
  );
}
