import React from "react";
import img from "../../../Assets/silhouette.webp";
import { AiOutlineArrowRight } from "react-icons/ai";
import style from "./style.module.css";
const SingleArticle = () => {
  return (
    <div className={`${style.grid} border-t-2 border-black pt-4 font-bold`}>
      <img src={img} alt="" className={`${style["grid_img"]}`} />
      <h6
        className={`${style.grid_heading} text-2xl font-semibold opacity-70 mt-5 mb-10 md:mt-0 md:ml-4 xl:text-5xl`}
      >
        Introducing Rev by Lyft
      </h6>
      <p
        className={`${style.grid_press} text-xs  md:flex items-end md:ml-4 md:text-base`}
      >
        Press <span className="font-normal">3.28.23</span>
      </p>
      <div className={`${style["grid_arrow"]}`}>
        <AiOutlineArrowRight className="w-full  h-full" />
      </div>
    </div>
  );
};

export default SingleArticle;
