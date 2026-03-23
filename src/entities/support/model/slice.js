import { localStorageAdapter } from "core/store";
import { normalizeSupports } from "./normalize";

export const supportSlice = {
  key: "supports",
  storageKey: "twi-supports",
  storage: localStorageAdapter,
  selector: (s) => s.supports,

  createInitialState: () => {
    const persisted = supportSlice.storage.get(supportSlice.storageKey);
    return normalizeSupports(persisted);
  },
};
