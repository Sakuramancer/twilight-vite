import { createCachedFactorySelector, createMemoSelector } from "shared/lib";

const selectStyx = createMemoSelector([(s) => s.styx], (styx) => styx);

const makePointsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.styx], (styx) => {
    return styx.isActive && styx.owner === playerIndex ? 1 : 0;
  }),
);

export const styxSelectors = {
  selectStyx,
  makePointsForPlayer,
};
