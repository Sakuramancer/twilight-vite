import { validatePlayerIndex } from "core/player";
import { createDefaultPoints } from "./defaults";

export const update = (mecatol, playerIndex, value) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  return mecatol.map((points, index) =>
    index === playerIndex ? value : points,
  );
};

export const reset = () => createDefaultPoints();
