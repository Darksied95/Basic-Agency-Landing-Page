import React, { useRef } from "react";
import ArticleSlider from "./ArticleSlider";

const SectionTwo = () => {
  const sliderCounter = useRef();

  function updateSlider(num) {
    let stringinfyNum = num + "%";
    sliderCounter.current.style.left = stringinfyNum;
    sliderCounter.current.style.transform = `translateX(-${stringinfyNum})`;
  }

  return (
    <section>
      <h1>Featured Engagement</h1>
      <ArticleSlider updateSlider={updateSlider} />
      <div className=" h-[1px]  bg-gray-500 w-[90vw] m-auto ">
        <div className="relative w-full h-full">
          <span
            ref={sliderCounter}
            className="absolute block h-full w-[30%] bg-black z-10"
          ></span>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
