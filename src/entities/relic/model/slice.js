import { localStorageAdapter } from "core/store";
import { normalizeRelics } from "./normalize";

export const relicSlice = {
  key: "relics",
  storageKey: "twi-relics",
  storage: localStorageAdapter,
  selector: (s) => s.relics,

  createInitialState: () => {
    const persisted = relicSlice.storage.get(relicSlice.storageKey);
    return normalizeRelics(persisted);
  },
};
