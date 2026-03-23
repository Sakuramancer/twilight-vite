import { useRef } from "react";
import { useButton } from "react-aria";
import { ButtonContext } from "./ButtonContext";

const Button = ({ children, ...props }) => {
  const ref = useRef();
  const { buttonProps } = useButton(props, ref);

  return (
    <ButtonContext.Provider value={buttonProps}>
      {children}
    </ButtonContext.Provider>
  );
};

export { Button };
