import React, { useRef } from "react";
import ArticleSlider from "./ArticleSlider";

const SectionTwo = () => {
  const sliderCounter = useRef();

  function updateSlider(num) {
    sliderCounter.current.style.left = num + "%";
  }

  return (
    <section>
      <h1>Featured Engagement</h1>
      <ArticleSlider updateSlider={updateSlider} />
      <div className=" bottom-0 h-[1px]  bg-gray-500 w-[90vw] m-auto right-[2rem] ">
        <div className="relative w-full h-full">
          <span
            ref={sliderCounter}
            className="absolute block h-full w-[30%] bg-black z-10"
            style={{
              transition: ".5s",
            }}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
