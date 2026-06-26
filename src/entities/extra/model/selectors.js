import { createCachedFactorySelector, createMemoSelector } from "shared/lib";

const makeExtraForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.extra[playerIndex]], (extra) => extra),
);

export const extraSelectors = {
  makeExtraForPlayer,
};
