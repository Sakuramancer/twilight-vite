import { useCallback, useEffect, useRef, useState } from "react";

export const useTimer = (delay = 1000) => {
  const [isActive, setActive] = useState(false);
  const timeoutRef = useRef(null);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const startTimer = useCallback(
    (onFinish = null) => {
      setActive(true);
      clearTimer();

      timeoutRef.current = setTimeout(() => {
        setActive(false);
        onFinish?.();
        timeoutRef.current = null;
      }, delay);
    },
    [clearTimer, delay],
  );

  const stopTimer = useCallback(() => {
    clearTimer();
    setActive(false);
  }, [clearTimer]);

  const toggleTimer = useCallback(
    (onFinish) => {
      if (isActive) {
        stopTimer();
      } else {
        startTimer(onFinish);
      }
    },
    [isActive, startTimer, stopTimer],
  );

  useEffect(() => clearTimer, [clearTimer]);

  return {
    isActive,
    startTimer,
    stopTimer,
    toggleTimer,
    clearTimer,
  };
};
