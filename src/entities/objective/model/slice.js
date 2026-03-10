import { localStorageAdapter } from "core/store/storage/localStorageAdapter";
import { normalizeObjectives } from "./normalize";

export const objectiveSlice = {
  key: "objectives",
  storageKey: "twi-objectives",
  storage: localStorageAdapter,
  selector: (s) => s.objectives,

  createInitialState: () => {
    const persisted = objectiveSlice.storage.get(objectiveSlice.storageKey);
    return normalizeObjectives(persisted);
  },
};
