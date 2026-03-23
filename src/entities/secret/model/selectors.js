import { createCachedFactorySelector, createMemoSelector } from "core/utils";
import { secretsStatic } from "./data";
import { sortByTitle } from "./sort";

const sortedIds = Object.values(secretsStatic)
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

const selectForCurrentScreen = createMemoSelector(
  [(s) => s.secrets, (s) => s.colors],
  (secrets, colors) =>
    secrets.map((playerSecrets, index) => {
      const colorId = colors[index].colorId;
      return {
        colorId,
        playerSecrets: playerSecrets
          .filter((secret) => secret.taken && secret.cardId)
          .map(({ cardId }) => cardId),
      };
    }),
);

export const secretSelectors = {
  sortedIds,
  makePointsForPlayer,
  selectForCurrentScreen,
};
