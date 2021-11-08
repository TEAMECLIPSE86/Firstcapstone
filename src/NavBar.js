import React from "react";
import "./NavBar.css";
import Button from "./Button.png";

const NavBar = () => {
  return (
    <div className="container">
      <div className="gmail">
        <a href="https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2Fsecurity&ec=GAlAwAE&flowName=GlifWebSignIn&flowEntry=AddSession" >
          Gmail
        </a>
      </div>
      <div className="images">
        <a href="https://www.google.com.ng/imghp?hl=en&ogbl" >
          Images
        </a>
      </div>
      <div className="button">
        <a href="https://www.google.com.ng/intl/en/about/products" >
          <img src={Button}  alt="No Display"/>
        </a>
      </div>
      <div className="button1">
       <a href="https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAlAmgQ&flowName=GlifWebSignIn&flowEntry=AddSession" ><button className="btn">Sign in</button></a>
      </div>
    </div>
  );
};

export default NavBar;
