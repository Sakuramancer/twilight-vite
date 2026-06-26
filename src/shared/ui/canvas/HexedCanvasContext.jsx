import { createContext, useContext } from "react";

export const HexedCanvasContext = createContext();

export const useHexedCanvasContext = () => {
  const context = useContext(HexedCanvasContext);
  if (!context) {
    throw Error(
      "HexedCanvas-related components must be wrapped with <HexedCanvas>.",
    );
  }
  return context;
};
