import { validatePlayerIndex } from "core/config";
import { createDefaultPoints } from "./defaults";

export const update = (extra, playerIndex, value) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  return extra.map((points, index) => (index === playerIndex ? value : points));
};

export const reset = () => {
  return createDefaultPoints();
};
