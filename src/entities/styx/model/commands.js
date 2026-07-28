import { setOwner, activate, reset } from "./model";

export const createStyxCommands = (store) => ({
  setStyxOwner: (playerIndex) => {
    const { styx } = store.get();
    store.set({ styx: setOwner(styx, playerIndex) });
  },

  activateStyx: () => {
    const { styx } = store.get();
    store.set({ styx: activate(styx) });
  },

  resetStyx: () => {
    const { styx } = store.get();
    store.set({ styx: reset(styx) });
  },
});
