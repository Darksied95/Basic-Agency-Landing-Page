import React, { useEffect, useState, useContext } from "react";
import Hover from "./../../Hover/Hover";
import { AppContext } from "../../../App";

const SectionTwoHover = ({ customRef, showCursor, hideCursor, clicked }) => {
  const [showSectionTwoHover, setShowSectionTwoHover] = useState(true);
  const { sectionTwoCustomMouse, updateSectionTwoMouse } =
    useContext(AppContext);

  useEffect(() => {
    function updateSectionTwo() {
      setShowSectionTwoHover(window.scrollY > 600 ? true : false);
    }
    window.addEventListener("scroll", updateSectionTwo);

    return () => {
      window.removeEventListener("scroll", updateSectionTwo);
    };
  }, [showSectionTwoHover]);

  return (
    <Hover
      visibleValue={0}
      customRef={customRef}
      showCursor={showCursor}
      hideCursor={hideCursor}
      customMouseMoved={sectionTwoCustomMouse}
      updateCustomMouse={updateSectionTwoMouse}
    >
      {!clicked ? (
        <div
          className={`bg-[#f9cdcdff] text-black dark:text-black rounded-full w-full aspect-square font-bold text-xs grid place-content-center 
         ${showSectionTwoHover ? "block" : "hidden"}`}
          style={{ transition: "none" }}
        >
          DRAG
        </div>
      ) : (
        <div className="relative " style={{ transition: "none" }}>
          <div className="bg-[#f9cdcdff] rounded-full w-[80%] aspect-square font-bold text-xs grid place-content-center m-auto"></div>
          <span className="border-[10px] border-transparent border-r-[#f9cdcdff] absolute top-1/2 -left-6"></span>
          <span className="border-[10px] border-transparent border-l-[#f9cdcdff] absolute top-1/2 -right-6"></span>
        </div>
      )}
    </Hover>
  );
};

export default SectionTwoHover;
