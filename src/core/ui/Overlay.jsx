import { useCallback, useEffect, useState } from "react";
import classNames from "classnames/bind";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { OverlayContext } from "./OverlayContext";
import ScrollToTop from "./ScrollToTop";
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
  const [removing, setRemoving] = useState(false);

  const discardHandler = useCallback(() => {
    setTimeout(() => {
      setRemoving(false);
      onDiscard?.();
    }, 300);
    setRemoving(true);
  }, [onDiscard]);

  const confirmHandler = (value) => {
    setTimeout(() => {
      setRemoving(false);
      onConfirm?.(value);
    }, 300);
    setRemoving(true);
  };

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        discardHandler();
      }
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

export default Overlay;
