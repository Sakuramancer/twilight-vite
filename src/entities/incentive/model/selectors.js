import { createCachedFactorySelector, createMemoSelector } from "shared/lib";
import { incentivesMeta } from "./data";

const selectIncentive = createMemoSelector(
  [(s) => s.incentive],
  (incentive) => incentive,
);

const makePointsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.incentive], (incentive) =>
    incentive.cardId && incentive.points[playerIndex]
      ? incentivesMeta[incentive.cardId].points
      : 0,
  ),
);

export const incentiveSelectors = {
  selectIncentive,
  makePointsForPlayer,
};
