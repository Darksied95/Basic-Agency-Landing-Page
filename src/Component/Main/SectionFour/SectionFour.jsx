import React from "react";
import SingleArticle from "./SingleArticle";
import { data } from "./data";

const SectionFour = () => {
  return (
    <section className="uppercase max-w-[90vw] mx-auto ">
      <div className="flex justify-between items-center mb-11">
        <h6 className="font-bold text-2xl xl:text-[2.6rem] xl:leading-tight">
          Featured <br className="md:hidden xl:block" /> News
        </h6>
        <button className="uppercase outline outline-1 rounded-3xl px-6 py-2 text-xs font-bold xl:text-base">
          view all
        </button>
      </div>
      {data.map((each, i) => (
        <SingleArticle key={i} {...each} />
      ))}
    </section>
  );
};

export default SectionFour;
