import { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames/bind";
import { useTimer } from "../../hooks/useTimer";
import { Backdrop } from "./Backdrop";
import { OverlayContext } from "./OverlayContext";
import { ScrollToTop } from "./ScrollToTop";
import classes from "./Overlay.module.css";

const cx = classNames.bind(classes);

const Overlay = ({
  className,
  containerId,
  onDiscard,
  onConfirm,
  discardOnClickIn = false,
  withScroll = false,
  children,
}) => {
  const { isActive: removing, startTimer } = useTimer(300);

  const discardHandler = useCallback(() => {
    startTimer(() => onDiscard?.());
  }, [onDiscard, startTimer]);

  const confirmHandler = useCallback(
    (value) => startTimer(() => onConfirm?.(value)),
    [onConfirm, startTimer],
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") discardHandler();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [discardHandler]);

  const containerClass = cx(className, {
    container: true,
    "overflow-auto": withScroll,
    "overflow-hidden": !withScroll,
    enter: !removing,
    exit: removing,
  });

  const context = { onDiscard: discardHandler, onConfirm: confirmHandler };

  return (
    <>
      <Backdrop onClick={discardHandler} />
      {ReactDOM.createPortal(
        <div
          className={containerClass}
          onClick={discardOnClickIn ? discardHandler : undefined}
          id={`scrollable-container-${containerId}`}
        >
          <OverlayContext.Provider value={context}>
            {children}
            {withScroll && <ScrollToTop containerId={containerId} />}
          </OverlayContext.Provider>
        </div>,
        document.getElementById("overlay-root"),
      )}
    </>
  );
};

export { Overlay };
