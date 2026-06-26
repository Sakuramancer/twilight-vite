import { createCachedFactorySelector, createMemoSelector } from "shared/lib";
import { extraSelectors } from "entities/extra";
import { playerSelectors } from "entities/player";

const makeExtraForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector(
    [
      playerSelectors.makeColorIdByPlayer(playerIndex),
      extraSelectors.makeExtraForPlayer(playerIndex),
    ],
    (colorId, extra) => ({ colorId, extra }),
  ),
);

export const selectors = {
  makeExtraForPlayer,
};
