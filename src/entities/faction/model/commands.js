import { assignToPlayer, resetAll, switchOnPlayer } from "./model";

export const createFactionCommands = (store) => ({
  setFaction: (playerIndex, factionId) => {
    const { factions } = store.get();
    store.set({
      factions: assignToPlayer(factions, playerIndex, factionId),
    });
  },

  switchFaction: (playerIndex) => {
    const { factions } = store.get();
    store.set({ factions: switchOnPlayer(factions, playerIndex) });
  },

  resetFactions: () => {
    const { factions } = store.get();
    store.set({ factions: resetAll(factions) });
  },
});
