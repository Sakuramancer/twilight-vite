import { reset, update } from "./model";

export const createExtraCommands = (store) => ({
  setExtra: (playerIndex, value) => {
    const { extra } = store.get();
    store.set({ extra: update(extra, playerIndex, value) });
  },

  resetExtra: () => {
    const { extra } = store.get();
    store.set({ extra: reset(extra) });
  },
});
