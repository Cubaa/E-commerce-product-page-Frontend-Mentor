import { useEffect, useState } from "react";

export const useResize = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    function reseizeHandler() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', reseizeHandler);

    return () => window.removeEventListener('resize', reseizeHandler);
  }, []);

  return windowWidth;
};