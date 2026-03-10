import { localStorageAdapter } from "core/store/storage/localStorageAdapter";
import { normalizeSecrets } from "./normalize";

export const secretSlice = {
  key: "secrets",
  storageKey: "twi-secrets",
  storage: localStorageAdapter,
  selector: (s) => s.secrets,

  createInitialState: () => {
    const persisted = secretSlice.storage.get(secretSlice.storageKey);
    return normalizeSecrets(persisted);
  },
};
