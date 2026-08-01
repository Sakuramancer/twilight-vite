import { reset, resetPoints, setNew, togglePoints } from "./model";

export const createLeakCommands = (store) => ({
  setLeak: (cardId, playerIndex) => {
    const { leak } = store.get();
    store.set({ leak: setNew(leak, cardId, playerIndex) });
  },

  togglePointsForPlayer: (playerIndex) => {
    const { leak } = store.get();
    store.set({ leak: togglePoints(leak, playerIndex) });
  },

  resetLeakPoints: () => {
    const { leak } = store.get();
    store.set({ leak: resetPoints(leak) });
  },

  resetLeak: () => {
    const { leak } = store.get();
    store.set({ leak: reset(leak) });
  },
});
