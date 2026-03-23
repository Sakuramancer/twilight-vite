import { localStorageAdapter } from "core/store";
import { normalizeColors } from "./normalize";

export const colorSlice = {
  key: "colors",
  storageKey: "twi-colors",
  storage: localStorageAdapter,
  selector: (s) => s.colors,

  createInitialState: () => {
    const persisted = colorSlice.storage.get(colorSlice.storageKey);
    return normalizeColors(persisted);
  },
};
