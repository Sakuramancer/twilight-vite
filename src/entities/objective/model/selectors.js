import { createCachedFactorySelector, createMemoSelector } from "shared/lib";
import { objectivesMeta } from "./data";

const selectObjectives = createMemoSelector(
  [(s) => s.objectives],
  (objectives) => objectives,
);

const makeObjectiveByIndex = createCachedFactorySelector((cardIndex) =>
  createMemoSelector(
    [(s) => s.objectives[cardIndex]],
    (objective) => objective,
  ),
);

const makeDateBeforeObjective = createCachedFactorySelector((cardIndex) =>
  createMemoSelector(
    [(s) => (cardIndex > 0 ? s.objectives[cardIndex - 1]?.date : -1)],
    (date) => date,
  ),
);

const makePointsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.objectives], (objectives) =>
    objectives.reduce(
      (accumulator, objective) =>
        accumulator +
        (objective.cardId && objective.points[playerIndex]
          ? objectivesMeta[objective.cardId].points
          : 0),
      0,
    ),
  ),
);

export const objectiveSelectors = {
  selectObjectives,
  makeObjectiveByIndex,
  makeDateBeforeObjective,
  makePointsForPlayer,
};
