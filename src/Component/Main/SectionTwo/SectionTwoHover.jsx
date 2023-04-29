import React from "react";
import Hover from "./../../Hover/Hover";

const SectionTwoHover = ({ customRef, showCursor, hideCursor }) => {
  return (
    <Hover
      customRef={customRef}
      showCursor={showCursor}
      hideCursor={hideCursor}
    >
      <div className="bg-[#f9cdcdff] rounded-full w-full aspect-square font-bold text-xs grid place-content-center">
        DRAG
      </div>
    </Hover>
  );
};

export default SectionTwoHover;
