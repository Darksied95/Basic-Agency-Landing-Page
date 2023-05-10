import React, { useRef, useState } from "react";
import ArticleCarousel from "./ArticleCarousel";
import ArticleSlider from "./ArticleSlider";
import SectionTwoHover from "./SectionTwoHover";
import useHover from "./../../../Hooks/useHover";

const SectionTwo = () => {
  const sliderCounter = useRef();
  const sectionRef = useRef();
  const { showCursor, handleShowCursor, handleHideCursor } = useHover();

  const [clicked, setClicked] = useState(false);

  const handleMouseUp = () => setClicked(false);

  const handleMouseDown = () => setClicked(true);

  function updateSlider(num) {
    let stringinfyNum = num + "%";
    sliderCounter.current.style.left = stringinfyNum;
    sliderCounter.current.style.transform = `translateX(-${stringinfyNum})`;
  }

  return (
    <section
      className="relative select-none "
      ref={sectionRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <h1 className="text-2xl leading-6 font-bold ml-[5vw] uppercase xl:ml-20 xl:text-5xl xl:mt-28">
        Featured
        <br className="md:hidden xl:block" />
        Engagements
      </h1>

      <SectionTwoHover
        customRef={sectionRef}
        showCursor={handleShowCursor}
        hideCursor={handleHideCursor}
        clicked={clicked}
      />

      <ArticleCarousel updateSlider={updateSlider} />

      <ArticleSlider sliderCounter={sliderCounter} />
    </section>
  );
};

export default SectionTwo;
