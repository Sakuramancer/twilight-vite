import { assignToPlayer, activateOne, deactivateOne, resetAll } from "./model";

export const createGainCommands = (store) => ({
  setGain: (gainId, playerIndex) => {
    const { gains } = store.get();
    store.set({ gains: assignToPlayer(gains, gainId, playerIndex) });
  },

  activateGain: (gainId) => {
    const { gains } = store.get();
    store.set({ gains: activateOne(gains, gainId) });
  },

  deactivateGain: (gainId) => {
    const { gains } = store.get();
    store.set({ gains: deactivateOne(gains, gainId) });
  },

  resetGains: () => {
    const { gains } = store.get();
    store.set({ gains: resetAll(gains) });
  },
});
