import { createCachedFactorySelector, createMemoSelector } from "shared/lib";

const makeMecatolForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.mecatol[playerIndex]], (mecatol) => mecatol),
);

export const mecatolSelectors = {
  makeMecatolForPlayer,
};
