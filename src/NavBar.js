import React from "react";
import "./NavBar.css";
import Button from "./Button.png";

const NavBar = () => {
  return (
    <div className="container">
      <div className="gmail">
        <a href="#" target="_blank">
          Gmail
        </a>
      </div>
      <div className="images">
        <a href="#" target="_blank">
          Images
        </a>
      </div>
      <div className="button">
        <a href="#" target="_blank">
          <img src={Button} />
        </a>
      </div>
      <div className="button1">
       <a href="#" target="_blank"><button className="btn">Sign in</button></a>
      </div>
    </div>
  );
};

export default NavBar;
