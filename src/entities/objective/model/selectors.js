import { createCachedFactorySelector, createMemoSelector } from "core/utils";
import { objectivesStatic } from "./data";

const makePointsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.objectives], (objectives) =>
    objectives.reduce(
      (accumulator, objective) =>
        accumulator +
        (objective.cardId && objective.points[playerIndex]
          ? objectivesStatic[objective.cardId].points
          : 0),
      0,
    ),
  ),
);

export const objectiveSelectors = {
  makePointsForPlayer,
};
