import { localStorageAdapter } from "core/store/storage/localStorageAdapter";
import { normalizeMecatol } from "./normalize";

export const mecatolSlice = {
  key: "mecatol",
  storageKey: "twi-mecatol",
  storage: localStorageAdapter,
  selector: (s) => s.mecatol,

  createInitialState: () => {
    const persisted = mecatolSlice.storage.get(mecatolSlice.storageKey);
    return normalizeMecatol(persisted);
  },
};
