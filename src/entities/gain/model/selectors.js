import { createCachedFactorySelector, createMemoSelector } from "core/utils";

const makePointsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.gains], (gains) => {
    const { styx } = gains;
    return styx === playerIndex ? 1 : 0;
  }),
);

export const gainSelectors = {
  makePointsForPlayer,
};
