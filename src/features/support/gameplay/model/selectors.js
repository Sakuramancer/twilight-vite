import { createCachedFactorySelector, createMemoSelector } from "shared/lib";
import { playerSelectors } from "entities/player";
import { supportSelectors } from "entities/support";

const makeSupporters = createCachedFactorySelector(
  (playerIndex) =>
    createMemoSelector(
      [
        supportSelectors.makeSupportersOfPlayer(playerIndex),
        playerSelectors.selectPlayers,
      ],
      (supports, players) => ({
        colorId: players[playerIndex].colorId,
        receiverIndex: supports.receiverIndex,
        supporters: supports.supporters.map((supporterIndex) => ({
          colorId: players[supporterIndex].colorId,
          supporterIndex,
        })),
      }),
    ),
);

export const selectors = {
  makeSupporters,
};
