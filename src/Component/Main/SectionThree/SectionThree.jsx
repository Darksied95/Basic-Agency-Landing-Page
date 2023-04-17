import React, { useEffect, useRef } from "react";
import SectionThreeVideo from "../../../Assets/SectionThree.mp4";

const SectionThree = ({ appRef }) => {
  const sectionThreeRef = useRef();
  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) => {
  //     console.log(entry.boundingClientRect);
  //     if (entry.isIntersecting) {
  //       Object.assign(appRef.current.style, {
  //         backgroundColor: "black",
  //         color: "red",
  //         borderColor: "red !important",
  //         outline: "red",
  //       });
  //     }
  //   });

  //   observer.observe(sectionThreeRef.current);
  // });

  return (
    <section
      ref={sectionThreeRef}
      className="mx-6 uppercase md:flex flex-auto gap-8 relative lg:max-w-[90vw] lg:m-auto mb-32"
    >
      <div className="order-2  md:w-[50%]">
        <video src={SectionThreeVideo} autoPlay loop muted></video>
      </div>
      <div className="md:w-[50%]">
        <p className="text-4xl font-bold leading-8 mt-10 md:text-5xl md:mt-0 lg:text-[6vw]">
          BASIC/DEPT<sup>®</sup> helps brands
          <span className="inline-block bg-black w-7 aspect-square rounded-full lg:w-[4.5vw]" />
          connect w/ culture
        </p>
        <p className="my-5 text-sm ">
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
