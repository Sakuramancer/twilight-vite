import { createCachedFactorySelector, createMemoSelector } from "shared/lib";

const makeGain = createCachedFactorySelector((gainId) =>
  createMemoSelector([(s) => s.gains[gainId]], (gain) => gain),
);

const makePointsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.gains], (gains) => {
    const { styx } = gains;
    return styx === playerIndex ? 1 : 0;
  }),
);

export const gainSelectors = {
  makeGain,
  makePointsForPlayer,
};
