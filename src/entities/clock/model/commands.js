import { add, remove, updateLabel, reset } from "../model";

export const createClockCommands = (store) => ({
  addClock: (label) => {
    const { clocks } = store.get();
    store.set({ clocks: add(clocks, label) });
  },

  removeClock: (clockId) => {
    const { clocks } = store.get();
    store.set({ clocks: remove(clocks, clockId) });
  },

  updateClockLabel: (clockId, label) => {
    const { clocks } = store.get();
    store.set({ clocks: updateLabel(clocks, clockId, label) });
  },

  resetClocks: () => {
    const { clocks } = store.get();
    store.set({ clocks: reset(clocks) });
  },
});
