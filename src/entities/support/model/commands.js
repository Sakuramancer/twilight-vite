import { resetAll, resetOne, update } from "./model";

export const createSupportCommands = (store) => ({
  setSupport: (supporterIndex, receiverIndex) => {
    const { supports } = store.get();
    store.set({
      supports: update(supports, supporterIndex, receiverIndex),
    });
  },

  resetSupportOfPlayer: (supporterIndex) => {
    const { supports } = store.get();
    store.set({ supports: resetOne(supports, supporterIndex) });
  },

  resetSupports: () => {
    const { supports } = store.get();
    store.set({ supports: resetAll(supports) });
  },
});
