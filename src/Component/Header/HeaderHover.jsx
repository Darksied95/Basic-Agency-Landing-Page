import Hover from "../Hover/Hover";

const HeaderHover = ({ headerRef, showCursor, hideCursor }) => {
  return (
    <Hover
      customRef={headerRef}
      showCursor={showCursor}
      hideCursor={hideCursor}
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
