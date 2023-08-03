import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
export default function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="achievements">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          8+
        </div>
        <span tyle={{ color: darkMode ? "white" : "" }}>years</span>
        <span>Experience</span>
      </div>
      <div className="achievements">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          20+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievements">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          5+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Companies</span>
        <span>Work</span>
      </div>
    </div>
  );
}
