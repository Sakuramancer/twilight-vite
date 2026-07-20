import { useRef } from "react";
import { useButton, useSearchField } from "react-aria";
import { useSearchFieldState } from "react-stately";
import { HexedCanvas } from "../canvas/HexedCanvas";
import classes from "./SearchField.module.css";

const SearchField = (props) => {
  const state = useSearchFieldState(props);
  const inputRef = useRef(null);
  const clearButtonRef = useRef(null);
  const { inputProps, clearButtonProps } = useSearchField(
    props,
    state,
    inputRef,
  );
  const { buttonProps } = useButton(clearButtonProps, clearButtonRef);
  const focusHandler = () => inputRef.current?.focus();

  const geometry = { width: 225, height: 260, anchorSize: 150 };

  return (
    <div className={classes.main} onClick={focusHandler}>
      <HexedCanvas className={classes.canvas} geometry={geometry}>
        <HexedCanvas.Magnifier className={classes.magnifier} />
      </HexedCanvas>
      <input
        {...inputProps}
        className={classes.input}
        ref={inputRef}
        placeholder="Поиск..."
      />
      {state.value !== "" && (
        <button
          {...buttonProps}
          className={classes.clearButton}
          aria-label="Очистить"
          ref={clearButtonRef}
        >
          <span className={classes.clearIcon} />
        </button>
      )}
    </div>
  );
};

export { SearchField };
