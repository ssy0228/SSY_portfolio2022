import { useEffect, useState } from 'react';

const useCursorEvnt = () => { 

  const [coords, setCoords] = useState({ x: null, y: null });

  useEffect(() => {

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCoords({ x: clientX, y: clientY });
    }

    if (navigator.maxTouchPoints === 0) {
      document.addEventListener('mousemove', onMouseMove);
    } else {
      return () => {
        document.removeEventListener('mousemove', onMouseMove);
      }
    }
  }, []);

  return coords;
}

export default useCursorEvnt;