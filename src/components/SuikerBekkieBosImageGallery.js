import React from "react";
import "./ImageGallery.css";
import {
  bos10,
  bos11,
  bos12,
  bos13,
  bos14,
  bos15,
  bos3,
  bos4,
  bos5,
  bos6,
  bos7,
  bos8,
  bos9,
} from "../assets";

function SuikerBekkieBosImageGallery() {
  return (
    <div className="galleryContainer">
      <h1>Gallery</h1>

      <div className="imgStyle">
        <div className="imgStyleContainer">
          <img src={bos3}></img>
        </div>
        <div className="imgStyleContainer">
          <img src={bos4}></img>
        </div>
        <div className="imgStyleContainer">
          <img src={bos5}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={bos6}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={bos7}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={bos8}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={bos9}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={bos10}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={bos11}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={bos11}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={bos12}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={bos13}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={bos14}></img>
        </div>
        <div className="imgStyleContainer">
          {" "}
          <img src={bos15}></img>
        </div>
      </div>
    </div>
  );
}

export default SuikerBekkieBosImageGallery;
