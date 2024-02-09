import { useEffect, useRef, useState } from 'react';

const useThrottleScroll = (delay: number, top: number, bottom: number): number => {
  const [scrollPosition, setScrollPosition] = useState(top);
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!throttleTimeout.current) {
        throttleTimeout.current = setTimeout(() => {
          const position = bottom < window.scrollY ? bottom : window.scrollY;
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
