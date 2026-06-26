import { StoreContext } from "shared/store";
import { useRootStore } from "../store/useRootStore";

const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useRootStore}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider };
