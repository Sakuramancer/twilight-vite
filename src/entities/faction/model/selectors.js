import { createCachedFactorySelector } from "core/createCachedSelector";
import { createMemoSelector } from "core/createMemoSelector";
import { factionsStatic } from "./factions.data";
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
