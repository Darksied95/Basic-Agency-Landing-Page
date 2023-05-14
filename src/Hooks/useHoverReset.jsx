import { useEffect } from "react";

const useHoverReset = (Ref, updateCustomMouse) => {
  useEffect(() => {
    const $sectionRef = Ref.current;
    $sectionRef.addEventListener("mousemove", () => {
      updateCustomMouse(false);
    });

    return () => {
      $sectionRef.removeEventListener("mousemove", () => {
        updateCustomMouse(false);
      });
    };
  });
};

export default useHoverReset;
