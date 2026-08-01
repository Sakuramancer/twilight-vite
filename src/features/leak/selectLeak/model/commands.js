import { getLeakCommands } from "entities/leak";
import { getSecretCommands } from "entities/secret";

export const selectLeak = (playerIndex, secretIndex, cardId) => {
  getSecretCommands().resetSecret(playerIndex, secretIndex);
  getLeakCommands().setLeak(cardId, playerIndex);
};
