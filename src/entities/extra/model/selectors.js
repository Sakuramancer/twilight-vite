import { createCachedFactorySelector } from "core/createCachedSelector";
import { createMemoSelector } from "core/createMemoSelector";

const makeExtraForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector(
    [(s) => s.colors[playerIndex].colorId, (s) => s.extra[playerIndex]],
    (colorId, extra) => ({ colorId, extra }),
  ),
);

export const extraSelectors = {
  makeExtraForPlayer,
};
