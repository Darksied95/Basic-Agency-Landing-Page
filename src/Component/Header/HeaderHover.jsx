import { useRef, useEffect, useCallback } from "react";

const HeaderHover = ({ handleShowCursor, handleHideCursor }) => {
  const cursorRef = useRef();

  const mousemoveHandler = useCallback(
    (e) => {
      const { clientX, clientY } = e;
      if (clientY < 90) {
        mouseleaveHandler();
        handleShowCursor();
        return;
      }
      cursorRef.current.style.top = clientY - 35 + "px";
      cursorRef.current.style.left = clientX - 35 + "px";
      handleHideCursor();
    },
    [handleShowCursor, handleHideCursor]
  );

  const mouseleaveHandler = () => {
    cursorRef.current.style.top = "50%";
    cursorRef.current.style.left = "50%";
  };
  useEffect(() => {
    document
      .querySelector("#header")
      .addEventListener("mousemove", mousemoveHandler);

    document
      .querySelector("#header")
      .addEventListener("mouseleave", mouseleaveHandler);

    return () => {
      document
        .querySelector("#header")
        .removeEventListener("mousemove", mousemoveHandler);

      document
        .querySelector("#header")
        .removeEventListener("mouseleave", mouseleaveHandler);
    };
  }, [mousemoveHandler]);
  return (
    <div
      ref={cursorRef}
      className="absolute top-1/2 left-1/2  w-24 flex flex-col justify-center lg:w-32 select-none"
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
    </div>
  );
};

export default HeaderHover;
