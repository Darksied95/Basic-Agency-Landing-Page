import { useState } from "react";

const useHover = () => {
  const [showCursor, setShowCursor] = useState(false);
  const [customMouseMoved, setCustomMouseMoved] = useState(false);
  const handleShowCursor = () => setShowCursor(true);
  const handleHideCursor = () => setShowCursor(false);
  const updateCustomMouse = (bool) => setCustomMouseMoved(bool);
  return {
    showCursor,
    handleShowCursor,
    handleHideCursor,
    customMouseMoved,
    updateCustomMouse,
  };
};

export default useHover;
