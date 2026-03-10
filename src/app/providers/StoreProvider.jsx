import { StoreContext } from "core/store/StoreContext";
import { useRootStore } from "../store/useRootStore";

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useRootStore}>
      {children}
    </StoreContext.Provider>
  );
};
