import { useEffect, useState } from 'react';

const useAutoRotate = (length, interval = 5000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, length]);

  const next = () => setIndex((current) => (current + 1) % length);
  const prev = () => setIndex((current) => (current - 1 + length) % length);

  return { index, setIndex, next, prev };
};

export default useAutoRotate;
