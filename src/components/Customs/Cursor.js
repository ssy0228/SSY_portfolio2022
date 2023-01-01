import { useEffect, useRef } from "react";
import useCursorEvnt from "../../hooks/useMoveMouse";

const Cursor = () => {
  const ref = useRef(null);
  const { x, y } = useCursorEvnt();
  

  useEffect(() => {
    const pointer = ref.current;
    const touchPT = navigator.maxTouchPoints;
    if (touchPT === 0) {
      pointer.style.display = "block";
    } else if (touchPT >= 1) {
      pointer.style.display = "none";
    }
  });

  return <div className="pointer2" ref={ref} style={{ left: `${x}px`, top: `${y}px`}}></div>;
};

export default Cursor;
