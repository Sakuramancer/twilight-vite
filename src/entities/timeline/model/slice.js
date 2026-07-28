import { localStorageAdapter } from "shared/store";
import { normalizeTimeline } from "./normalize";

export const timelineSlice = {
  key: "timeline",
  storageKey: "twi-timeline",
  storage: localStorageAdapter,
  selector: (s) => s.timeline,

  createInitialState: () => {
    const persisted = timelineSlice.storage.get(timelineSlice.storageKey);
    return normalizeTimeline(persisted);
  },
};
