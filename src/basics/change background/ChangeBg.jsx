import React, { useState } from "react";
import "./ChangeBg.scss";
import { useTitle } from "../../hooks/Hooks";
export default function ChangeBg() {
  useTitle("Background Color Changer");

  const [color, setColor] = useState("#ff3800");
  const changeColor = (c) => {
    setColor(c);
  };

  return (
    <div className="change-bg" style={{ backgroundColor: color }}>
      <h2>please click 👆 on color </h2>
      <p>to change background color👻</p>
      <div className="circle-container">
        <div
          className="circle color1"
          onClick={() => changeColor("#99b898")}
        ></div>
        <div
          className="circle color2"
          onClick={() => changeColor("#fecea8")}
        ></div>
        <div
          className="circle color3"
          onClick={() => changeColor("#ff847c")}
        ></div>
        <div
          className="circle color4"
          onClick={() => changeColor("#e84a5f")}
        ></div>
        <div
          className="circle color5"
          onClick={() => changeColor("#2a363b")}
        ></div>
      </div>
    </div>
  );
}
