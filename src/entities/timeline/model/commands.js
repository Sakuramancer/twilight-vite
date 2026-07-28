import { add, remove, updateLabel, reset } from ".";

export const createTimelineCommands = (store) => ({
  addMark: (label) => {
    const { timeline } = store.get();
    store.set({ timeline: add(timeline, label) });
  },

  removeMark: (markId) => {
    const { timeline } = store.get();
    store.set({ timeline: remove(timeline, markId) });
  },

  updateMarkLabel: (markId, label) => {
    const { timeline } = store.get();
    store.set({ timeline: updateLabel(timeline, markId, label) });
  },

  resetTimeline: () => {
    const { timeline } = store.get();
    store.set({ timeline: reset(timeline) });
  },
});
