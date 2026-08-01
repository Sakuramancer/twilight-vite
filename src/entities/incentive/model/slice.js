import { localStorageAdapter } from "shared/store";
import { normalizeIncentive } from "./normalize";

export const incentiveSlice = {
  key: "incentive",
  storageKey: "twi-incentive",
  storage: localStorageAdapter,
  selector: (s) => s.incentive,

  createInitialState: () => {
    const persisted = incentiveSlice.storage.get(incentiveSlice.storageKey);
    return normalizeIncentive(persisted);
  },
};
