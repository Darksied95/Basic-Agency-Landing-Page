import React from "react";
import RockClimbing from "../../../Assets/RockClimbing.webp";
import Tennis from "../../../Assets/Tennis.webp";
import GoogleStore from "../../../Assets/GoogleStore.mp4";

const PictureCarousel = () => {
  return (
    <div>
      <div>
        <img src={RockClimbing} alt="/" />
        <h1>PATAGONIA </h1>
        <span>An Ecommerce Experience driven by patagonia's brand mission</span>
      </div>
      <div>
        <img src={Tennis} alt="" />
        <h1> WILSON</h1>
        <span>A century-old sports brand finding its place in culture</span>
      </div>
      <div>
        <video>
          <source src={GoogleStore} />
        </video>
        <h1>GOOGLE STORE </h1>
        <span>
          {" "}
          An ecommerce experience helping google bring its hardware to people
          across the globe
        </span>
      </div>
    </div>
  );
};

export default PictureCarousel;
