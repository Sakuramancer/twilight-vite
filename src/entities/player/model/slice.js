import { localStorageAdapter } from "shared/store";
import { normalizePlayers } from "./normalize";

export const playerSlice = {
  key: "players",
  storageKey: "twi-players",
  storage: localStorageAdapter,
  selector: (s) => s.players,

  createInitialState: () => {
    const persisted = playerSlice.storage.get(playerSlice.storageKey);
    return normalizePlayers(persisted);
  },
};
