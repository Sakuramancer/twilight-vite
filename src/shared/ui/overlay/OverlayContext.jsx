import { createContext, useContext } from "react";

export const OverlayContext = createContext();
export const useOverlayContext = () => useContext(OverlayContext);
