import data from "./data";
import React, { useEffect, useRef, useState } from "react";
import SectionTwoHover from "./SectionTwoHover";
import useHover from "../../../Hooks/useHover";

const ArticleSlider = ({ updateSlider }) => {
  const UlRef = useRef(null);
  const PreviousMouseValue = useRef(0);
  const { handleShowCursor, handleHideCursor } = useHover();
  const [clicked, setClicked] = useState(false);
  const updateClicked = (bool) => setClicked(bool);

  useEffect(() => {
    const { current } = UlRef;

    const scrollHandler = (current) => {
      const widthIncludingOverFlow =
        current.scrollWidth - current.getBoundingClientRect().width;

      const scrollLeftValueInPercentage = Math.floor(
        (current.scrollLeft / widthIncludingOverFlow) * 100
      );

      updateSlider(scrollLeftValueInPercentage);
    };

    const mouseMoveHandler = (e) => {
      if (PreviousMouseValue.current >= e.clientX) {
        current.scrollLeft += 40;
        PreviousMouseValue.current = e.clientX;
      } else {
        current.scrollLeft -= 40;
        PreviousMouseValue.current = e.clientX;
      }
    };
    const mouseDownHandler = () => {
      updateClicked(true);
      current.addEventListener("mousemove", mouseMoveHandler);
    };

    const mouseUpHandler = () => {
      updateClicked(false);
      current.removeEventListener("mousemove", mouseMoveHandler);
    };

    current.addEventListener("scroll", () => scrollHandler(current));
    current.addEventListener("mousedown", mouseDownHandler);
    current.addEventListener("mouseup", mouseUpHandler);

    return () => {
      current.removeEventListener("scroll", () => scrollHandler(current));
      current.removeEventListener("mousedown", mouseDownHandler);
      current.addEventListener("mouseup", mouseUpHandler);
    };
  });

  const ContainerRef = useRef();
  return (
    <div className="relative" ref={ContainerRef}>
      <SectionTwoHover
        customRef={ContainerRef}
        clicked={clicked}
        showCursor={handleShowCursor}
        hideCursor={handleHideCursor}
      />
      <ul
        ref={UlRef}
        className=" scrollbar-none relative ml-7 pt-14 xl:pt-28 flex gap-4 overflow-scroll pb-20 md:ml-10 lg:ml-14 xl:ml-20 xl:gap-16 cursor-none"
      >
        {data.map(({ Link, Icon, IconSize, Name, Text }, index) => (
          <li
            key={index}
            className="min-w-[72.2vw] md:min-w-[44.5vw] lg:min-w-[28.6vw] xl:min-w-[26vw]"
          >
            <div style={{ width: IconSize }} className="xl:mb-24 ">
              <img src={Icon} alt="/" className="mb-3 " loading="lazy" />
              <hr className="block w-5 h-[3px] bg-black dark:bg-[#f9cdcd]" />
            </div>

            <h2 className="font-bold text-xl mt-10 mb-4 uppercase">{Name}</h2>
            <p className="text-sm font-semibold whitespace-normal opacity-70 xl:text-lg">
              {Text}
              {Link && (
                <a href="/" className="underline cursor-none">
                  here.
                </a>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleSlider;
