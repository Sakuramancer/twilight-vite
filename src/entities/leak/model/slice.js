import { localStorageAdapter } from "shared/store";
import { normalizeLeak } from "./normalize";

export const leakSlice = {
  key: "leak",
  storageKey: "twi-leak",
  storage: localStorageAdapter,
  selector: (s) => s.leak,

  createInitialState: () => {
    const persisted = leakSlice.storage.get(leakSlice.storageKey);
    return normalizeLeak(persisted);
  },
};
