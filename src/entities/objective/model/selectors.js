import { createCachedFactorySelector } from "core/createCachedSelector";
import { createMemoSelector } from "core/createMemoSelector";
import { objectivesStatic } from "./objectives.data";

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
