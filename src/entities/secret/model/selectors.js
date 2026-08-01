import { createCachedFactorySelector, createMemoSelector } from "shared/lib";
import { secretsMeta } from "./data";
import { sortByTitle } from "./sort";

const sortedIds = Object.values(secretsMeta)
  .sort(sortByTitle)
  .map((secret) => secret.id);

const makePointsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.secrets[playerIndex]], (secrets) =>
    secrets.reduce(
      (accumulator, secret) =>
        accumulator + (secret.taken && secret.cardId ? 1 : 0),
      0,
    ),
  ),
);

const selectSecrets = createMemoSelector(
  [(s) => s.secrets],
  (secrets) => secrets,
);

const selectActiveSecrets = createMemoSelector([(s) => s.secrets], (secrets) =>
  secrets.map((playerSecrets, playerIndex) => ({
    playerIndex,
    playerSecrets: playerSecrets
      .map((secret, secretIndex) => ({ ...secret, secretIndex }))
      .filter((secret) => secret.taken && secret.cardId)
      .map(({ cardId, secretIndex }) => ({ cardId, secretIndex })),
  })),
);

export const secretSelectors = {
  sortedIds,
  makePointsForPlayer,
  selectSecrets,
  selectActiveSecrets,
};
