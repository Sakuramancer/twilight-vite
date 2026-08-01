import { playerSelectors } from "entities/player";
import { secretSelectors } from "entities/secret";
import { createMemoSelector } from "shared/lib";

const selectSecrets = createMemoSelector(
  [secretSelectors.selectActiveSecrets, playerSelectors.selectPlayers],
  (secrets, players) =>
    secrets.map((playerSecrets) => ({
      ...playerSecrets,
      colorId: players[playerSecrets.playerIndex].colorId,
    })),
);

export const selectors = {
  selectSecrets,
};
