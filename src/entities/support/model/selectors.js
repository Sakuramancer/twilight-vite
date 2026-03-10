import { createCachedFactorySelector } from "core/createCachedSelector";
import { createMemoSelector } from "core/createMemoSelector";

const makePointsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.supports], (supports) =>
    supports.reduce(
      (accumulator, receiver) =>
        accumulator + (receiver === playerIndex ? 1 : 0),
      0,
    ),
  ),
);

const makeSupportersOfColoredPlayer = createCachedFactorySelector(
  (playerIndex) =>
    createMemoSelector(
      [(s) => s.supports, (s) => s.colors],
      (supports, colors) => ({
        colorId: colors[playerIndex].colorId,
        receiverIndex: supports[playerIndex],
        supporters: supports.reduce(
          (acc, whoSupported, supporterIndex) =>
            whoSupported === playerIndex
              ? [
                  ...acc,
                  { colorId: colors[supporterIndex].colorId, supporterIndex },
                ]
              : acc,
          [],
        ),
      }),
    ),
);

export const supportSelectors = {
  makePointsForPlayer,
  makeSupportersOfColoredPlayer,
};
