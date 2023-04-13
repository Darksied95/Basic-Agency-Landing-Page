import React from "react";
import SectionThreeVideo from "../../../Assets/SectionThree.mp4";

const SectionThree = () => {
  return (
    <section className="mx-8 uppercase">
      <div>
        <video src={SectionThreeVideo} autoPlay loop muted></video>
      </div>
      <div>
        <p className="text-4xl font-bold leading-8 mt-10">
          BASIC/DEPT<sup>®</sup> helps brands
          <span className="inline-block bg-red-500 w-7 aspect-square rounded-full" />
          connect w/ culture
        </p>
        <p className="my-5 text-sm ">
          ADweek <span className="font-semibold">agency spotlight</span>
        </p>
        <button className="uppercase py-2 px-6 font-bold text-xs border border-solid border-black rounded-3xl">
          about us
        </button>
      </div>
    </section>
  );
};

export default SectionThree;
