import { assignToPlayer, resetAll } from "./model";

export const createColorCommands = (store) => ({
  setColor: (playerIndex, colorId) => {
    const { colors } = store.get();
    store.set({ colors: assignToPlayer(colors, playerIndex, colorId) });
  },

  resetColors: () => {
    const { colors } = store.get();
    store.set({ colors: resetAll(colors) });
  },
});
