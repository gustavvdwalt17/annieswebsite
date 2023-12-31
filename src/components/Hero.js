import React from "react";
import { homeLogo } from "../assets";
import "./HeroStyles.css";
function Hero(props) {
  return (
    <div className="hero">
      <div className="hero-text">{/* <h1>Welkom By Suikerbekkie!</h1> */}</div>
      <img alt="HeroImg" src={homeLogo} />
    </div>
  );
}

export default Hero;
