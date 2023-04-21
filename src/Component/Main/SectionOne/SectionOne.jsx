import React from "react";
import BandD from "../../../Assets/BandD.jsx";
import MediaSlider from "./MediaSlider";

const SectionOne = () => {
  return (
    <section className="mt-7  md:mt-12 xl:mt-20">
      <div className="xl:flex flex-wrap px-5 xs:px-9 md:px-12 xl:gap-6 xl:px-20 ">
        <p className="font-semibold text-xl leading-6 mb-9 xs:max-w-[80vw] md:max-w-[48.5vw] order-1 xl:text-4xl">
          BASIC/DEPT® is a global branding and digital design agency building
          products, services, and eCommerce experiences that turn cultural
          values into company value.
        </p>
        <button className="border border-black border-solid mb-16 px-8 py-2 rounded-full font-bold text-xs order-3">
          <a href="/">SEE THE WORK</a>
        </button>
        <div className="w-[53vw] ml-auto order-2 xl:w-[36.4vw] xl:h-[11vh]">
          <BandD />
        </div>
      </div>

      <MediaSlider />

      <div className="flex items-center justify-between border-t border-solid mt-8 md:mt-24 mb-14 border-black pt-4 mx-5 xs:mx-9 md:mx-12 xl:mx-20">
        <p className=" text-xs xl:flex-auto xl:flex xl:justify-between xl:text-sm">
          <span>00</span>
          <br className="xl:hidden" />
          <span>/05</span>
        </p>
        <div className="xl:flex-auto xl:justify-self-end">
          <span className=" block w-2  aspect-square rounded-full bg-black ml-auto xl:w-3"></span>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
