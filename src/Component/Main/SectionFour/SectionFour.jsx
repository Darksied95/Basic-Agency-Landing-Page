import React from "react";
import SingleArticle from "./SingleArticle";
import { data } from "./data";

const SectionFour = () => {
  return (
    <section className="bg-white dark:bg-[#252422] dark:text-[#f9cdcd] relative z-20">
      <div className=" uppercase max-w-[90vw] mx-auto lg:pt-28 md:pb-40 xl:pb-60   ">
        <div className="flex justify-between items-center mb-11">
          <h6 className="font-bold text-2xl xl:text-[2.6rem] xl:leading-tight">
            Featured <br className="md:hidden xl:block" /> News
          </h6>
          <button className="uppercase outline outline-1 rounded-3xl px-7 py-2 text-xs font-bold xl:text-base">
            view all
          </button>
        </div>
        {data.map((each, i) => (
          <SingleArticle key={i} {...each} />
        ))}
      </div>
    </section>
  );
};

export default SectionFour;
