import { localStorageAdapter } from "core/store";
import { normalizeExtra } from "./normalize";

export const extraSlice = {
  key: "extra",
  storageKey: "twi-extra",
  storage: localStorageAdapter,
  selector: (s) => s.extra,

  createInitialState: () => {
    const persisted = extraSlice.storage.get(extraSlice.storageKey);
    return normalizeExtra(persisted);
  },
};
