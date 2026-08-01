import { reset, resetPoints, setNew, togglePoints } from "./model";

export const createIncentiveCommands = (store) => ({
  setIncentive: (cardId) => {
    const { incentive } = store.get();
    store.set({ incentive: setNew(incentive, cardId) });
  },

  togglePointsForPlayer: (playerIndex) => {
    const { incentive } = store.get();
    store.set({ incentive: togglePoints(incentive, playerIndex) });
  },

  resetIncentivePoints: () => {
    const { incentive } = store.get();
    store.set({ incentive: resetPoints(incentive) });
  },

  resetIncentive: () => {
    const { incentive } = store.get();
    store.set({ incentive: reset(incentive) });
  },
});
