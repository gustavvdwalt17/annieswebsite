import React, { useState } from "react";
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
import "./LocationFirst.css";
import { Link } from "react-router-dom";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
function LocationFirst() {
  const [imgIndex, setImgIndex] = useState(0);
  const imgUrls = [
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
      <h1>Suikerbekkie Woonstel</h1>

      <div className="location_1_desc">
        <div className="location_1_desc_text">
          <h2>Suikerbekkie Woonstel</h2>
          <p>
            Indulge in modern comfort amidst a rustic paradise at Suikerbekkie
            Apartment Oasis. Priced at a welcoming R800 per night, our charming
            apartment is a perfect blend of contemporary living and the untamed
            beauty of the surrounding bush. Surrounded by the vibrant energy of
            the outdoors, you'll find a community of ducks and dogs adding
            character to your stay. The soothing sounds of nature serve as the
            backdrop to your relaxation, making Suikerbekkie Apartment Oasis a
            haven for those seeking a unique and rejuvenating experience.
            Embrace the balance between urban luxury and the untamed wilderness
            as you create lasting memories in this picturesque setting.
          </p>
        </div>
        <div className="image">
          <img src={woonstelBuite}></img>
          <img src={woonstelBuite_2}></img>
        </div>
      </div>

      {/* <div className="/seemmore">
        <Link to={"/suikerbekkiewoonstel"}>
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

export default LocationFirst;
