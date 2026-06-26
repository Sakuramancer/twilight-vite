import {
  assignColorToPlayer,
  assignFactionToPlayer,
  toggleFactionOnPlayer,
  setInfluence,
  resetAll,
} from "./model";

export const createPlayerCommands = (store) => ({
  setColor: (playerIndex, colorId) => {
    const { players } = store.get();
    store.set({ players: assignColorToPlayer(players, playerIndex, colorId) });
  },

  setFaction: (playerIndex, factionId) => {
    const { players } = store.get();
    store.set({
      players: assignFactionToPlayer(players, playerIndex, factionId),
    });
  },

  toggleFaction: (playerIndex) => {
    const { players } = store.get();
    store.set({ players: toggleFactionOnPlayer(players, playerIndex) });
  },

  setInfluence: (playerIndex, value) => {
    const { players } = store.get();
    store.set({
      players: setInfluence(players, playerIndex, value),
    });
  },

  resetPlayers: () => {
    const { players } = store.get();
    store.set({ players: resetAll(players) });
  },
});
