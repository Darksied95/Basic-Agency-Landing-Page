import React from "react";
import Hover from "./../../Hover/Hover";

const SectionTwoHover = ({
  customRef,
  showCursor,
  hideCursor,
  clicked,
  showSectionTwoHover,
}) => {
  return (
    <Hover
      customRef={customRef}
      showCursor={showCursor}
      hideCursor={hideCursor}
    >
      {!clicked ? (
        <div
          className={`bg-[#f9cdcdff] rounded-full w-full aspect-square font-bold text-xs grid place-content-center 
         ${showSectionTwoHover ? "visible" : "invisible"}`}
        >
          DRAG
        </div>
      ) : (
        <div className="relative ">
          <div className="bg-[#f9cdcdff] rounded-full w-[80%] aspect-square font-bold text-xs grid place-content-center m-auto"></div>
          <span className="border-[10px] border-transparent border-r-[#f9cdcdff] absolute top-1/2 -left-6"></span>
          <span className="border-[10px] border-transparent border-l-[#f9cdcdff] absolute top-1/2 -right-6"></span>
        </div>
      )}
    </Hover>
  );
};

export default SectionTwoHover;
