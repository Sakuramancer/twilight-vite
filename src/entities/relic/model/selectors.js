import { createCachedFactorySelector, createMemoSelector } from "shared/lib";
import { relicsMeta } from "./data";
import { normalizeRelic } from "./normalize";
import { sortMetaByTitle, sortForGameplay } from "./sort";

const isActive = (relic) => relic.state.playerIndex > -1;

const isScored = (relic) => relic.meta.havePoint && relic.state.pointTaken;

const allSortedIdsWithFilters = createCachedFactorySelector((filters) =>
  Object.values(relicsMeta)
    .filter((card) => filters[card.expansion])
    .sort(sortMetaByTitle)
    .map((relic) => relic.id),
);

const makePointsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.relics], (relics) =>
    Object.entries(relics)
      .map(([id, state]) => ({
        id,
        meta: relicsMeta[id],
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
      meta: relicsMeta[id],
      state,
    }))
    .filter((relic) => isActive(relic))
    .sort(sortForGameplay)
    .map(({ id }) => id),
);

const selectIdsInactive = createMemoSelector([(s) => s.relics], (relics) =>
  Object.entries(relicsMeta)
    .filter(([id, _]) => !(id in relics))
    .map(([_, relicMeta]) => relicMeta)
    .sort(sortMetaByTitle)
    .map(({ id }) => id),
);

const makeIdsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.relics], (relics) =>
    Object.entries(relics)
      .map(([id, state]) => ({
        id,
        meta: relicsMeta[id],
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
    [(s) => s.players, (s) => s.relics[relicId]],
    (players, relic) => {
      const normalizedRelic = normalizeRelic(relic);
      return {
        relicId,
        meta: relicsMeta[relicId],
        state: normalizedRelic,
        colorId:
          normalizedRelic.playerIndex >= 0
            ? players[normalizedRelic.playerIndex].colorId
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
