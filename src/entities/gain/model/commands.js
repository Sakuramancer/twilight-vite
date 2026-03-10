import { assignToPlayer, resetAll, resetOne } from "./model";

export const createGainCommands = (store) => ({
  setGain: (gainId, playerIndex) => {
    const { gains } = store.get();
    store.set({ gains: assignToPlayer(gains, gainId, playerIndex) });
  },

  resetGain: (gainId) => {
    const { gains } = store.get();
    store.set({ gains: resetOne(gains, gainId) });
  },

  resetGains: () => {
    const { gains } = store.get();
    store.set({ gains: resetAll(gains) });
  },
});
