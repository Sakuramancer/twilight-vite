import { createContext, useContext } from "react";

export const StoreContext = createContext(null);

export const useStore = (selector) => {
  const useStoreImpl = useContext(StoreContext);
  if (!useStoreImpl) {
    throw new Error("StoreProvider missing");
  }
  return useStoreImpl(selector);
};
