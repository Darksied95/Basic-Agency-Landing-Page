import React from "react";
import BandD from "../../../Assets/B&D.svg";
import MediaSlider from "./MediaSlider";

const SectionOne = () => {
  return (
    <section className="px-5 xs:px-9 md:px-14">
      <div>
        <p className="font-semibold text-xl leading-6 mb-7 xs:max-w-[80vw] md:max-w-[48.5vw]">
          BASIC/DEPT® is a global branding and digital design agency building
          products, services, and eCommerce experiences that turn cultural
          values into company value.
        </p>
        <button className="border border-black border-solid mb-16 px-8 py-2 rounded-full font-bold text-xs">
          <a href="/">SEE THE WORK</a>
        </button>
      </div>
      <figure className="w-[53vw] ml-auto">
        <img src={BandD} alt="" />
      </figure>
      <MediaSlider />
    </section>
  );
};

export default SectionOne;
