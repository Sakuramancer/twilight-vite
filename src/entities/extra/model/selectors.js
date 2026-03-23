import { createCachedFactorySelector, createMemoSelector } from "core/utils";

const makeExtraForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector(
    [(s) => s.colors[playerIndex].colorId, (s) => s.extra[playerIndex]],
    (colorId, extra) => ({ colorId, extra }),
  ),
);

export const extraSelectors = {
  makeExtraForPlayer,
};
