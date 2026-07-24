import { useEffect, useRef } from "react";
import { useTextField } from "react-aria";
import classes from "./MarkField.module.css";

const MarkField = ({ focusTrigger, setFocusTrigger, ...props }) => {
  const inputRef = useRef(null);
  const { inputProps } = useTextField(props, inputRef);

  const onKeyDown = (e) => {
    inputProps.onKeyDown?.(e);

    if (!e.defaultPrevented && e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  useEffect(() => {
    if (!focusTrigger) return;
    requestAnimationFrame(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
      setFocusTrigger(false);
    });
  }, [focusTrigger, setFocusTrigger]);

  return (
    <div className={classes.main}>
      <input
        {...inputProps}
        className={classes.input}
        ref={inputRef}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export { MarkField };
