import { createCachedFactorySelector, createMemoSelector } from "core/utils";
import { relicsStatic } from "./data";
import { normalizeRelic } from "./normalize";
import { sortStaticByTitle, sortForGameplay } from "./sort";

const isActive = (relic) => relic.state.playerIndex > -1;

const isScored = (relic) => relic.static.havePoint && relic.state.pointTaken;

const allSortedIdsWithFilters = createCachedFactorySelector((filters) =>
  Object.values(relicsStatic)
    .filter((card) => filters[card.expansion])
    .sort(sortStaticByTitle)
    .map((relic) => relic.id),
);

const makePointsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.relics], (relics) =>
    Object.entries(relics)
      .map(([id, state]) => ({
        id,
        static: relicsStatic[id],
        state,
      }))
      .reduce(
        (accumulator, relic) =>
          accumulator +
          (relic.state.playerIndex === playerIndex && isScored(relic) ? 1 : 0),
        0,
      ),
  ),
);

const selectIdsForGameplay = createMemoSelector([(s) => s.relics], (relics) =>
  Object.entries(relics)
    .map(([id, state]) => ({
      id,
      static: relicsStatic[id],
      state,
    }))
    .filter((relic) => isActive(relic))
    .sort(sortForGameplay)
    .map(({ id }) => id),
);

const selectIdsInactive = createMemoSelector([(s) => s.relics], (relics) =>
  Object.entries(relicsStatic)
    .filter(([id, _]) => !(id in relics))
    .map(([_, relicStatic]) => relicStatic)
    .sort(sortStaticByTitle)
    .map(({ id }) => id),
);

const makeIdsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.relics], (relics) =>
    Object.entries(relics)
      .map(([id, state]) => ({
        id,
        static: relicsStatic[id],
        state,
      }))
      .filter((relic) => isActive(relic))
      .filter((relic) => relic.state.playerIndex === playerIndex)
      .sort(sortForGameplay)
      .map(({ id }) => id),
  ),
);

const makeRelic = createCachedFactorySelector((relicId) =>
  createMemoSelector(
    [(s) => s.colors, (s) => s.relics[relicId]],
    (colors, relic) => {
      const normalizedRelic = normalizeRelic(relic);
      return {
        relicId,
        static: relicsStatic[relicId],
        state: normalizedRelic,
        colorId:
          normalizedRelic.playerIndex >= 0
            ? colors[normalizedRelic.playerIndex].colorId
            : "_default",
      };
    },
  ),
);

export const relicSelectors = {
  allSortedIdsWithFilters,
  makePointsForPlayer,
  selectIdsForGameplay,
  selectIdsInactive,
  makeIdsForPlayer,
  makeRelic,
};
