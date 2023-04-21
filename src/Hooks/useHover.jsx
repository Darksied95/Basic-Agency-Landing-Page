import { useState } from "react";

const useHover = () => {
  const [showCursor, setShowCursor] = useState(false);
  const handleShowCursor = () => setShowCursor(true);
  const handleHideCursor = () => setShowCursor(false);
  return { showCursor, handleShowCursor, handleHideCursor };
};

export default useHover;
