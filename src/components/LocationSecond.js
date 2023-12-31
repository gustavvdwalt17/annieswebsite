import React from "react";
import {
  homeLogo,
  woonstelBuite,
  woonstelBuite_2,
  bos1,
  bos2,
} from "../assets";
import "./LocationFirst.css";
import { Link } from "react-router-dom";
function LocationSecond() {
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

      <div className="seemmore">
        <Link to={"bosimg"}>
          <button className="seemorebtn">See more...</button>
        </Link>
      </div>
    </div>
  );
}

export default LocationSecond;
