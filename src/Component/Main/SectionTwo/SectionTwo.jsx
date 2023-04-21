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
    <section className="xl:mb-36">
      <h1 className="text-2xl leading-6 font-bold ml-[5vw] mb-14 uppercase xl:ml-20 xl:text-5xl xl:my-28">
        Featured <br className="md:hidden xl:block" /> Engagements
      </h1>
      <ArticleCarousel updateSlider={updateSlider} />
      <ArticleSlider sliderCounter={sliderCounter} />
    </section>
  );
};

export default SectionTwo;
