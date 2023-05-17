import { useRef, useEffect } from "react";

const Hover = ({
  visibleValue,
  customRef,
  showCursor,
  hideCursor,
  children,
  customMouseMoved,
  updateCustomMouse,
}) => {
  const cursorRef = useRef();
  useEffect(() => {
    const $customRef = customRef.current;

    const mousemoveHandler = (e) => {
      hideCursor();
      updateCustomMouse(true);
      const { clientX, clientY } = e;
      if (clientY < visibleValue) {
        mouseleaveHandler();
        return;
      }

      Object.assign(cursorRef.current.style, {
        top: clientY - 35 + "px",
        left: clientX - 65 + "px",
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

    $customRef.addEventListener("mousemove", mousemoveHandler);

    $customRef.addEventListener("mouseleave", mouseleaveHandler);

    return () => {
      $customRef.removeEventListener("mousemove", mousemoveHandler);

      $customRef.removeEventListener("mouseleave", mouseleaveHandler);
    };
  }, [customRef, hideCursor, showCursor, visibleValue, updateCustomMouse]);
  return (
    <div
      ref={cursorRef}
      className={`${
        customMouseMoved ? "fixed" : "absolute"
      }  top-1/2 left-1/2  w-24 flex flex-col justify-center lg:w-32 select-none z-10 cursor-none`}
    >
      {children}
    </div>
  );
};

export default Hover;
