import React, { useRef, useContext } from "react";
import { AppContext } from "../../../App";
import SectionThreeVideo from "../../../Assets/SectionThree.mp4";
import useHoverReset from "../../../Hooks/useHoverReset";

const SectionThree = ({ appRef }) => {
  const sectionThreeRef = useRef();
  const { updateSectionTwoMouse } = useContext(AppContext);
  useHoverReset(sectionThreeRef, updateSectionTwoMouse);

  return (
    <section
      ref={sectionThreeRef}
      className=" bg-white mx-6 uppercase md:flex flex-auto gap-8 relative z-20 lg:max-w-[90vw] lg:m-auto py-32 xl:pt-36"
    >
      <div className="order-2  md:w-[50%]">
        <video src={SectionThreeVideo} autoPlay loop muted></video>
      </div>
      <div className="md:w-[50%]">
        <p className="text-4xl font-bold leading-8 mt-10 md:text-5xl md:mt-0 lg:text-[6vw]">
          BASIC/DEPT<sup>®</sup> helps brands
          <span className="inline-block bg-black w-8  aspect-square rounded-full lg:w-[4.5vw]" />
          connect w/ culture
        </p>
        <p className="my-5 text-sm xl:mb-20">
          ADweek <span className="font-semibold">agency spotlight</span>
        </p>
        <button className="uppercase py-2 px-6 font-bold text-xs  outline outline-1 rounded-3xl">
          about us
        </button>
      </div>
    </section>
  );
};

export default SectionThree;
