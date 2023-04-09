import React from "react";
import SectionThreeVideo from "../../../Assets/SectionThree.mp4";

const SectionThree = () => {
  return (
    <section className="mx-8">
      <div>
        <video src={SectionThreeVideo} autoPlay loop muted></video>
      </div>
      <div>
        <p>BASIC/DEPT® helps brands ● connect w/ culture</p>
        <p>
          ADdweek <span>agency spotlight</span>
        </p>
        <button>about us</button>
      </div>
    </section>
  );
};

export default SectionThree;
