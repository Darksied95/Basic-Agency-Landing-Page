import data from "./data";
import React from "react";

const ArticleSlider = () => {
  return (
    <ul className="flex ml-7 gap-4 overflow-auto pb-20">
      {data.map(({ Link, Icon, IconSize, Name, Text }, index) => (
        <li key={index} className="min-w-[72.2vw]">
          <div className={`w-[${IconSize}]`}>
            <img src={Icon} alt="/" className="mb-3" />
            <hr className="block w-5 h-[2px] bg-black" />
          </div>
          <h2 className="font-bold text-2xl mt-10 mb-4">{Name}</h2>
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
