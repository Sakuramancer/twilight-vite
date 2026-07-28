import { localStorageAdapter } from "shared/store";
import { normalizeStyx } from "./normalize";

export const styxSlice = {
  key: "styx",
  storageKey: "twi-styx",
  storage: localStorageAdapter,
  selector: (s) => s.styx,

  createInitialState: () => {
    const persisted = styxSlice.storage.get(styxSlice.storageKey);
    return normalizeStyx(persisted);
  },
};
