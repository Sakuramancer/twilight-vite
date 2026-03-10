import { reset, update } from "./model";

export const createMecatolCommands = (store) => ({
  setMecatol: (playerIndex, value) => {
    const { mecatol } = store.get();
    store.set({ mecatol: update(mecatol, playerIndex, value) });
  },

  resetMecatol: () => {
    const { mecatol } = store.get();
    store.set({ mecatol: reset(mecatol) });
  },
});
