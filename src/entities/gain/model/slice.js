import { localStorageAdapter } from "core/store";
import { normalizeGains } from "./normalize";

export const gainSlice = {
  key: "gains",
  storageKey: "twi-gains",
  storage: localStorageAdapter,
  selector: (s) => s.gains,

  createInitialState: () => {
    const persisted = gainSlice.storage.get(gainSlice.storageKey);
    return normalizeGains(persisted);
  },
};
