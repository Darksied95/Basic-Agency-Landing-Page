import Hover from "../Hover/Hover";
import { useContext } from "react";
import { AppContext } from "../../App";

const HeaderHover = ({ headerRef, showCursor, hideCursor }) => {
  const { headerCustomMouse, updateHeaderMouse } = useContext(AppContext);
  return (
    <Hover
      visibleValue={90}
      customRef={headerRef}
      showCursor={showCursor}
      hideCursor={hideCursor}
      customMouseMoved={headerCustomMouse}
      updateCustomMouse={updateHeaderMouse}
    >
      <div className="bg-white rounded-[50%]  aspect-square text-center uppercase mx-3 mb-2 grid place-content-center">
        <p className="text-[11px] font-semibold leading-3 lg:text-[15px] lg:leading-5">
          Play <br />
          Reel
        </p>
      </div>

      <div className="text-white text-[10px] text-center font-bold lg:text-[13px]">
        <span>BASIC/DEPT®</span>

        <br />
        <span>2010 - 23©</span>
      </div>
    </Hover>
  );
};

export default HeaderHover;
