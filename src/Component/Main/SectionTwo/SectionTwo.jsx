import React, { useRef } from "react";
import ArticleCarousel from "./ArticleCarousel";
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
      <h1 className="text-2xl leading-6 font-bold ml-[5vw] mb-14 uppercase">
        Featured <br /> Engagements
      </h1>
      <ArticleCarousel updateSlider={updateSlider} />
      <ArticleSlider sliderCounter={sliderCounter} />
    </section>
  );
};

export default SectionTwo;
