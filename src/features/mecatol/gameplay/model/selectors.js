import { createCachedFactorySelector, createMemoSelector } from "shared/lib";
import { mecatolSelectors } from "entities/mecatol";
import { playerSelectors } from "entities/player";

const makeMecatolForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector(
    [
      playerSelectors.makeColorIdByPlayer(playerIndex),
      mecatolSelectors.makeMecatolForPlayer(playerIndex),
    ],
    (colorId, mecatol) => ({ colorId, mecatol }),
  ),
);

export const selectors = {
  makeMecatolForPlayer,
};
