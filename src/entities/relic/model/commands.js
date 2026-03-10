import {
  assignPlayer,
  togglePoint,
  togglePurged,
  resetOne,
  resetAll,
} from "../model";

export const createRelicCommands = (store) => ({
  assignRelicToPlayer: (relicId, playerIndex) => {
    const { relics } = store.get();
    store.set({ relics: assignPlayer(relics, relicId, playerIndex) });
  },

  toggleRelicPointTaken: (relicId) => {
    const { relics } = store.get();
    store.set({ relics: togglePoint(relics, relicId) });
  },

  toggleRelicPurged: (relicId) => {
    const { relics } = store.get();
    store.set({ relics: togglePurged(relics, relicId) });
  },

  resetRelic: (relicId) => {
    const { relics } = store.get();
    store.set({ relics: resetOne(relics, relicId) });
  },

  resetRelics: () => {
    const { relics } = store.get();
    store.set({ relics: resetAll(relics) });
  },
});
