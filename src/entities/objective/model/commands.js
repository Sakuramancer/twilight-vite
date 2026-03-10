import {
  resetAll,
  resetOne,
  resetPoints,
  setNew,
  togglePoints,
} from "../model";

export const createObjectiveCommands = (store) => ({
  addNewObjective: (cardIndex, cardId) => {
    const { objectives } = store.get();
    store.set({ objectives: setNew(objectives, cardIndex, cardId) });
  },

  togglePointsForPlayer: (cardIndex, playerIndex) => {
    const { objectives } = store.get();
    store.set({
      objectives: togglePoints(objectives, cardIndex, playerIndex),
    });
  },

  resetObjective: (cardIndex) => {
    const { objectives } = store.get();
    store.set({ objectives: resetOne(objectives, cardIndex) });
  },

  resetObjectivePoints: (cardIndex) => {
    const { objectives } = store.get();
    store.set({ objectives: resetPoints(objectives, cardIndex) });
  },

  resetObjectives: () => {
    const { objectives } = store.get();
    store.set({ objectives: resetAll(objectives) });
  },
});
