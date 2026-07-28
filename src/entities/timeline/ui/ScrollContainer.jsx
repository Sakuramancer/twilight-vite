import { useEffect, useRef } from "react";

const ScrollContainer = ({ className, children, trigger }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      ref.current.scrollLeft = ref.current.scrollWidth;
    });
  }, [trigger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export { ScrollContainer };
