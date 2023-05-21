import React, { useRef } from "react";
import ArticleCarousel from "./ArticleCarousel";
import ArticleSlider from "./ArticleSlider";

const SectionTwo = () => {
  const sliderCounter = useRef();
  const sectionRef = useRef();

  function updateSlider(num) {
    let stringinfyNum = num + "%";
    sliderCounter.current.style.left = stringinfyNum;
    sliderCounter.current.style.transform = `translateX(-${stringinfyNum})`;
  }

  return (
    <section
      className=" select-none dark:bg-[#252422] dark:text-[#f9cdcd] "
      ref={sectionRef}
    >
      <h1 className="text-2xl leading-6 font-bold ml-[5vw] uppercase xl:ml-20 xl:text-5xl xl:mt-28">
        Featured <br className="md:hidden xl:block" />
        Engagements
      </h1>

      <ArticleCarousel updateSlider={updateSlider} />
      <ArticleSlider sliderCounter={sliderCounter} />
    </section>
  );
};

export default SectionTwo;
