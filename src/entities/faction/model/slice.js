import { localStorageAdapter } from "core/store";
import { normalizeFactions } from "./normalize";

export const factionSlice = {
  key: "factions",
  storageKey: "twi-factions",
  storage: localStorageAdapter,
  selector: (s) => s.factions,

  createInitialState: () => {
    const persisted = factionSlice.storage.get(factionSlice.storageKey);
    return normalizeFactions(persisted);
  },
};
