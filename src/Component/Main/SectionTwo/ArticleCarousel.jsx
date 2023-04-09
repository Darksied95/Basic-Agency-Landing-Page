import data from "./data";
import React, { useEffect, useRef } from "react";

const ArticleSlider = ({ updateSlider }) => {
  const UlRef = useRef(null);

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

    current.addEventListener("scroll", () => scrollHandler(current));

    return () => {
      current.removeEventListener("scroll", () => scrollHandler(current));
    };
  });

  return (
    <ul
      ref={UlRef}
      className="scrollbar-none relative ml-7  flex gap-4 overflow-scroll pb-20 md:ml-10 lg:ml-14"
    >
      {data.map(({ Link, Icon, IconSize, Name, Text }, index) => (
        <li
          key={index}
          className="min-w-[72.2vw] md:min-w-[44.5vw] lg:min-w-[28.6vw]"
        >
          <div style={{ width: IconSize }}>
            <img src={Icon} alt="/" className="mb-3" />
            <hr className="block w-5 h-[2px] bg-black" />
          </div>

          <h2 className="font-bold text-xl mt-10 mb-4 uppercase">{Name}</h2>
          <p className="text-sm font-semibold whitespace-normal opacity-70">
            {Text}
            {Link && (
              <a href="/" className="underline">
                here.
              </a>
            )}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ArticleSlider;
