import { SetStateAction, useEffect, useRef, useState } from 'react';

const useThrottleScroll = (delay: number, top: number, bottom: number): number => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!throttleTimeout.current) {
        throttleTimeout.current = setTimeout(() => {
          let position: SetStateAction<number>;
          if (bottom < window.scrollY) {
            position = bottom;
          } else if (window.scrollY <= top) {
            position = 0;
          } else {
            position = window.scrollY - top;
          }
          requestRef.current = requestAnimationFrame(() => {
            setScrollPosition(position);
          });
          throttleTimeout.current = null;
        }, delay);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [delay, top]);

  return scrollPosition; // 해당 훅은 scrollPosition을 반환합니다.
};

export default useThrottleScroll;
