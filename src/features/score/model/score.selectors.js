import { PLAYER_COUNT } from "core/config";
import { createCachedFactorySelector } from "core/createCachedSelector";
import { createMemoSelector } from "core/createMemoSelector";
import { objectiveSelectors } from "entities/objective/model";
import { gainSelectors } from "entities/gain/model";
import { relicSelectors } from "entities/relic/model";
import { secretSelectors } from "entities/secret/model";
import { supportSelectors } from "entities/support/model";

const makeScoreForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector(
    [
      (s) => s.extra[playerIndex],
      (s) => s.mecatol[playerIndex],
      objectiveSelectors.makePointsForPlayer(playerIndex),
      gainSelectors.makePointsForPlayer(playerIndex),
      relicSelectors.makePointsForPlayer(playerIndex),
      secretSelectors.makePointsForPlayer(playerIndex),
      supportSelectors.makePointsForPlayer(playerIndex),
      (s) => s.colors[playerIndex].colorId,
      (s) => s.factions[playerIndex].factionId,
    ],
    (
      extra,
      mecatol,
      objectives,
      gains,
      relics,
      secrets,
      supports,
      colorId,
      factionId,
    ) => ({
      colorId,
      factionId,
      score: extra + mecatol + objectives + gains + relics + secrets + supports,
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

export const scoreSelectors = {
  makeScoreForPlayer,
  selectLeader,
};
