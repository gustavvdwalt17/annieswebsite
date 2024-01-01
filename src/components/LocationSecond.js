import React, { useState } from "react";
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
  bos1,
  bos2,
} from "../assets";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./LocationFirst.css";
import { Link } from "react-router-dom";
function LocationSecond() {
  const [imgIndex, setImgIndex] = useState(0);
  const imgUrls = [
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
    bos1,
    bos2,
  ];
  function showPrevImg() {
    setImgIndex((index) => {
      if (index === 0) return imgUrls.length - 1;
      return index - 1;
    });
  }

  function showNextImg() {
    setImgIndex((index) => {
      if (index === imgUrls.length - 1) return 0;
      return index + 1;
    });
  }
  return (
    <div className="location_1">
      <h1>Suikerbekkie Bos</h1>

      <div className="location_1_desc_reverse">
        <div className="location_1_desc_text">
          <h2>Suikerbekkie Bos</h2>
          <p>
            Nestled in the heart of nature, Suikerbekkie Bos offers a unique
            escape from the hustle and bustle of city life. Our cozy wendy
            house, available for rent at just R800 per night, provides an
            intimate retreat surrounded by the tranquil sounds of chirping birds
            and rustling leaves. As you step into Suikerbekkie Bos, you'll find
            yourself embraced by the serenity of the bush life. Imagine waking
            up to the gentle quacking of ducks and the friendly presence of
            dogs, creating a harmonious symphony of nature. This is not just a
            place to stay; it's an opportunity to immerse yourself in the
            peaceful rhythm of the wilderness.
          </p>
        </div>
        <div className="image">
          <img src={bos1}></img>
          <img src={bos2}></img>
        </div>
      </div>
      {/* 
      <div className="seemmore">
        <Link to={"/bosimg"}>
          <button className="seemorebtn">See more...</button>
        </Link>
      </div> */}
      <div
        style={{
          width: "100%",
          height: 400,
          position: "relative",
          marginTop: 50,
        }}
      >
        <img src={imgUrls[imgIndex]} className="img_slider" />
        <button
          onClick={showPrevImg}
          className="img_slider-btn"
          style={{ left: 0 }}
        >
          <ArrowBigLeft />
        </button>
        <button
          onClick={showNextImg}
          className="img_slider-btn"
          style={{ right: 0 }}
        >
          <ArrowBigRight />
        </button>
      </div>
    </div>
  );
}

export default LocationSecond;
