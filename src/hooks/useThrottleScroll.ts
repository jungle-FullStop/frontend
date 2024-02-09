import { useEffect, useState } from 'react';

const useThrottleScroll = (): number => {
  const [barPosition, setBarPosition] = useState(0);

  const handleScroll = () => {
    const position = 612 < window.scrollY ? 612 : window.scrollY;
    setBarPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return barPosition;
};

export default useThrottleScroll;
