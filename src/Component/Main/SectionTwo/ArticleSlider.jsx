import React from "react";

const ArticleSlider = ({ sliderCounter }) => {
  return (
    <div className=" h-[2px]  bg-gray-300 w-[90vw] m-auto  xl:w-[88vw] dark:bg-[#252422]">
      <div className="relative w-full h-full z-20">
        <span
          ref={sliderCounter}
          className="absolute block h-full w-[30%] bg-black md:w-[50%] dark:bg-[#f9cdcd] "
        ></span>
      </div>
    </div>
  );
};

export default ArticleSlider;
