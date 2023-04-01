import React from "react";
import RockClimbing from "../../../Assets/RockClimbing.webp";
import Tennis from "../../../Assets/Tennis.webp";
import GoogleStore from "../../../Assets/GoogleStore.mp4";

const MediaSlider = () => {
  return (
    <div className="flex mt-8 overflow-x-auto mb-20">
      <div className="min-w-[70vw]  mr-5 inline-block">
        <img src={RockClimbing} alt="/" />
        <h1 className="font-bold my-2 text-lg">PATAGONIA </h1>
        <p className="max-w-[110px] uppercase font-bold text-xs opacity-70 ">
          An Ecommerce Experience driven by patagonia's brand mission
        </p>
      </div>
      <div className="min-w-[70vw] mr-5 inline-block">
        <img src={Tennis} alt="" />
        <h1 className="font-bold my-2 text-lg"> WILSON</h1>
        <p className="max-w-[110px] uppercase font-bold text-xs opacity-70 ">
          A century-old sports brand finding its place in culture
        </p>
      </div>
      <div className="min-w-[70vw] mr-5 inline-block">
        <video autoPlay loop muted>
          <source src={GoogleStore} type="video/mp4" />
        </video>
        <h1 className="font-bold my-2 text-lg">GOOGLE STORE </h1>
        <p className="max-w-[110px] uppercase font-bold text-xs opacity-70 ">
          {" "}
          An ecommerce experience helping google bring its hardware to people
          across the globe
        </p>
      </div>
    </div>
  );
};

export default MediaSlider;
