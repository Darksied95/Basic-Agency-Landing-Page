import React from "react";

const ArticleSlider = ({ sliderCounter }) => {
  return (
    <div className=" h-[2px]  bg-gray-300 w-[90vw] m-auto ">
      <div className="relative w-full h-full">
        <span
          ref={sliderCounter}
          className="absolute block h-full w-[30%] bg-black md:w-[50%]"
        ></span>
      </div>
    </div>
  );
};

export default ArticleSlider;
