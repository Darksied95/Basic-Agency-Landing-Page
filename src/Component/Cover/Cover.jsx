import React from "react";
import style from "./Cover.module.css";

const Cover = () => {
  return (
    <div className={` bg-white grid place-content-center ${style.cover}`}>
      <h1 className={`text-9xl uppercase font-extrabold ${style.heading}`}>
        Basic <br /> /Dept<sub className=" text-lg">&#x24C7;</sub>
      </h1>
    </div>
  );
};

export default Cover;
