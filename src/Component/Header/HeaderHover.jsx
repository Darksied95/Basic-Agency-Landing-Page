import { useRef, useEffect } from "react";

const HeaderHover = ({ headerRef, showCursor, hideCursor }) => {
  const cursorRef = useRef();

  useEffect(() => {
    const $header = headerRef.current;

    const mousemoveHandler = (e) => {
      hideCursor();

      const { clientX, clientY } = e;

      if (clientY < 90) {
        return mouseleaveHandler();
      }

      console.log(clientX);
      Object.assign(cursorRef.current.style, {
        top: clientY - 35 + "px",
        left: clientX - 35 + "px",
        transition: "0s",
      });
    };

    const mouseleaveHandler = () => {
      showCursor();
      Object.assign(cursorRef.current.style, {
        top: "50%",
        left: "50%",
        transition: "1s",
        transform: "translate(-50%, -50%)",
      });
    };

    $header.addEventListener("mousemove", mousemoveHandler);

    $header.addEventListener("mouseleave", mouseleaveHandler);

    return () => {
      $header.removeEventListener("mousemove", mousemoveHandler);

      $header.removeEventListener("mouseleave", mouseleaveHandler);
    };
  }, [headerRef, hideCursor, showCursor]);
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
