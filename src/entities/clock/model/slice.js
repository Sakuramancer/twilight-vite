import { localStorageAdapter } from "shared/store";
import { normalizeClocks } from "./normalize";

export const clockSlice = {
  key: "clocks",
  storageKey: "twi-clocks",
  storage: localStorageAdapter,
  selector: (s) => s.clocks,

  createInitialState: () => {
    const persisted = clockSlice.storage.get(clockSlice.storageKey);
    return normalizeClocks(persisted);
  },
};
