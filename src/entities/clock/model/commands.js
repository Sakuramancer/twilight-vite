import { add, remove, updateLabel, reset } from "../model";

export const createClockCommands = (store) => ({
  addClock: (label) => {
    const { clocks } = store.get();
    store.set({ clocks: add(clocks, label) });
  },

  removeClock: (clockIndex) => {
    const { clocks } = store.get();
    store.set({ clocks: remove(clocks, clockIndex) });
  },

  updateClockLabel: (clockIndex, label) => {
    const { clocks } = store.get();
    store.set({ clocks: updateLabel(clocks, clockIndex, label) });
  },

  resetClocks: () => {
    const { clocks } = store.get();
    store.set({ clocks: reset(clocks) });
  },
});
