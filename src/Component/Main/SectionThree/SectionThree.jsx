import React, { useEffect, useRef } from "react";
import SectionThreeVideo from "../../../Assets/SectionThree.mp4";

const SectionThree = ({ appRef }) => {
  const sectionThreeRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          appRef.current.style.backgroundColor = "black";
        } else {
          appRef.current.style.backgroundColor = "white";
        }
      },
      { threshold: 0.8 }
    );

    observer.observe(sectionThreeRef.current);
  }, []);

  return (
    <section
      ref={sectionThreeRef}
      className="mx-8 uppercase md:flex flex-auto gap-8 relative lg:max-w-[90vw] lg:m-auto"
    >
      <div className="order-2  md:w-[50%]">
        <video src={SectionThreeVideo} autoPlay loop muted></video>
      </div>
      <div className="md:w-[50%]">
        <p className="text-4xl font-bold leading-8 mt-10 md:text-5xl md:mt-0 lg:text-[6vw]">
          BASIC/DEPT<sup>®</sup> helps brands
          <span className="inline-block bg-red-500 w-7 aspect-square rounded-full lg:w-[4.5vw]" />
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
