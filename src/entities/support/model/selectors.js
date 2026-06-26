import { createCachedFactorySelector, createMemoSelector } from "shared/lib";

const makePointsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.supports], (supports) =>
    supports.reduce(
      (accumulator, receiver) =>
        accumulator + (receiver === playerIndex ? 1 : 0),
      0,
    ),
  ),
);

const makeSupportersOfPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.supports], (supports) => ({
    receiverIndex: supports[playerIndex],
    supporters: supports
      .map((whoSupported, i) => (whoSupported === playerIndex ? i : -1))
      .filter((i) => i !== -1),
  })),
);

export const supportSelectors = {
  makePointsForPlayer,
  makeSupportersOfPlayer,
};
