import { createCachedFactorySelector, createMemoSelector } from "core/utils";
import { factionsStatic } from "./data";
import { sortByExpansionAndName } from "./sort";

const sortedIds = Object.values(factionsStatic)
  .filter((faction) => faction.available)
  .sort(sortByExpansionAndName)
  .map((faction) => faction.id);

const makeColored = createCachedFactorySelector((playerIndex) =>
  createMemoSelector(
    [
      (s) => s.colors[playerIndex].colorId,
      (s) => s.factions[playerIndex].factionId,
    ],
    (colorId, factionId) => ({ colorId, factionId }),
  ),
);

export const factionSelectors = {
  sortedIds,
  makeColored,
};
