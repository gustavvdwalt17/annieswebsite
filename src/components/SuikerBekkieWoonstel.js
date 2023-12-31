import React from "react";
import "./ImageGallery.css";
import {
  woonstel10,
  woonstel3,
  woonstel4,
  woonstel47,
  woonstel5,
  woonstel6,
  woonstel8,
  woonstel9,
  woonstelBuite,
  woonstelBuite_2,
} from "../assets";

function SuikerBekkieWoonstel() {
  return (
    <div className="galleryContainer">
      <h1>Gallery</h1>

      <div className="imgStyle">
        <div className="imgStyleContainer">
          <img src={woonstelBuite}></img>
        </div>
        <div className="imgStyleContainer">
          <img src={woonstelBuite_2}></img>
        </div>
        <div className="imgStyleContainer">
          <img src={woonstel3}></img>
        </div>
        <div className="imgStyleContainer">
          <img src={woonstel4}></img>
        </div>
        <div className="imgStyleContainer">
          <img src={woonstel5}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={woonstel6}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={woonstel47}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={woonstel8}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={woonstel9}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={woonstel10}></img>
        </div>
      </div>
    </div>
  );
}

export default SuikerBekkieWoonstel;
