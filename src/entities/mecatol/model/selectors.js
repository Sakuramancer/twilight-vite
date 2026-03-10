import { createCachedFactorySelector } from "core/createCachedSelector";
import { createMemoSelector } from "core/createMemoSelector";

const makeMecatolForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector(
    [(s) => s.colors[playerIndex].colorId, (s) => s.mecatol[playerIndex]],
    (colorId, mecatol) => ({ colorId, mecatol }),
  ),
);

export const mecatolSelectors = {
  makeMecatolForPlayer,
};
