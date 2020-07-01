import React from "react";
import "./infoBar.css";

export const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        {/* <img src="{onlineIcon}" alt="" className="onlineIcon" /> */}
        <h5 className="onlineIcon">Online</h5>
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <h5>Close</h5>
        </a>
      </div>
    </div>
  );
};
