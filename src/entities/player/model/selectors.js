import { createCachedFactorySelector, createMemoSelector } from "shared/lib";
import { PLAYER_COUNT } from "shared/config";
import { makeAgendaScore } from "entities/agenda/@x/player-score";
import { makeExtraScore } from "entities/extra/@x/player-score";
import { makeGainsScore } from "entities/gain/@x/player-score";
import { makeMecatolScore } from "entities/mecatol/@x/player-score";
import { makeObjectivesScore } from "entities/objective/@x/player-score";
import { makeRelicScore } from "entities/relic/@x/player-score";
import { makeSecretScore } from "entities/secret/@x/player-score";
import { makeSupportScore } from "entities/support/@x/player-score";
import { factionsMeta } from "./data";
import { sortFactionByExpansionAndName } from "./sort";

const sortedFactionIds = Object.values(factionsMeta)
  .filter((faction) => faction.available)
  .sort(sortFactionByExpansionAndName)
  .map((faction) => faction.id);

const selectPlayers = createMemoSelector(
  [(s) => s.players],
  (players) => players,
);

const makePlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.players[playerIndex]], (player) => player),
);

const makeColorIdByPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector(
    [(s) => s.players[playerIndex]?.colorId ?? "_default"],
    (colorId) => colorId,
  ),
);

const makeScoreForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector(
    [
      (s) => s.players[playerIndex],
      makeAgendaScore(playerIndex),
      makeGainsScore(playerIndex),
      makeExtraScore(playerIndex),
      makeMecatolScore(playerIndex),
      makeObjectivesScore(playerIndex),
      makeRelicScore(playerIndex),
      makeSecretScore(playerIndex),
      makeSupportScore(playerIndex),
    ],
    (player, ...scores) => ({
      ...player,
      score: scores.reduce((sum, score) => sum + score, 0),
    }),
  ),
);

const leaderSelectors = Array.from({ length: PLAYER_COUNT }, (_, index) =>
  makeScoreForPlayer(index),
);

const selectLeader = createMemoSelector(leaderSelectors, (...totalScores) => {
  let maxValue = -1;
  let maxIndex = -1;
  let isUnique = true;

  totalScores.forEach(({ score }, index) => {
    if (score > maxValue) {
      maxValue = score;
      maxIndex = index;
      isUnique = true;
    } else if (score === maxValue) {
      isUnique = false;
    }
  });

  if (!isUnique || maxIndex === -1) {
    return { index: -1 };
  }

  return {
    index: maxIndex,
    score: maxValue,
    colorId: totalScores[maxIndex].colorId,
    factionId: totalScores[maxIndex].factionId,
  };
});

export const isLeadersEqual = (first, second) =>
  first.index === second.index &&
  first.colorId === second.colorId &&
  first.factionId === second.factionId;

export const playerSelectors = {
  sortedFactionIds,
  selectPlayers,
  makePlayer,
  makeColorIdByPlayer,
  makeScoreForPlayer,
  selectLeader,
};
