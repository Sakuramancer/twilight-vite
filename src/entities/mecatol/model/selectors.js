import { createCachedFactorySelector, createMemoSelector } from "core/utils";

const makeMecatolForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector(
    [(s) => s.colors[playerIndex].colorId, (s) => s.mecatol[playerIndex]],
    (colorId, mecatol) => ({ colorId, mecatol }),
  ),
);

export const mecatolSelectors = {
  makeMecatolForPlayer,
};
