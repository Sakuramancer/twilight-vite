import {
  preselectForPlayer,
  setForPlayer,
  resetOne,
  resetAllForPlayer,
  resetAll,
} from "../model";

export const createSecretCommands = (store) => ({
  preselectSecretForPlayer: (playerIndex, secretIndex) => {
    const { secrets } = store.get();
    store.set({
      secrets: preselectForPlayer(secrets, playerIndex, secretIndex),
    });
  },

  setSecretForPlayer: (playerIndex, secretIndex, cardId) => {
    const { secrets } = store.get();
    store.set({
      secrets: setForPlayer(secrets, playerIndex, secretIndex, cardId),
    });
  },

  resetSecret: (playerIndex, secretIndex) => {
    const { secrets } = store.get();
    store.set({ secrets: resetOne(secrets, playerIndex, secretIndex) });
  },

  resetPlayerSecrets: (playerIndex) => {
    const { secrets } = store.get();
    store.set({ secrets: resetAllForPlayer(secrets, playerIndex) });
  },

  resetSecrets: () => {
    const { secrets } = store.get();
    store.set({ secrets: resetAll(secrets) });
  },
});
