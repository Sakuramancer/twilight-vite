import { createCachedFactorySelector, createMemoSelector } from "shared/lib";

const selectLeak = createMemoSelector([(s) => s.leak], (leak) => leak);

const makePointsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.leak], (leak) =>
    leak.cardId && leak.points[playerIndex] ? 1 : 0,
  ),
);

export const leakSelectors = {
  selectLeak,
  makePointsForPlayer,
};
