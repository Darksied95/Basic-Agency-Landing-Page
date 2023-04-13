import React from "react";
import SingleArticle from "./SingleArticle";

const SectionFour = () => {
  return (
    <section className="uppercase">
      <div className="flex justify-between items-center mb-11 ">
        <h6 className="font-bold text-xl">
          Featured <br /> News
        </h6>
        <button className="uppercase outline outline-1 rounded-3xl px-6 py-1 text-xs font-bold">
          view all
        </button>
      </div>
      <SingleArticle />
    </section>
  );
};

export default SectionFour;
