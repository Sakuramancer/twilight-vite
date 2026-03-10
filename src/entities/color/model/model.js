import { validatePlayerIndex } from "core/config";
import { validateColor } from "./validate";
import { createDefaultColors } from "./defaults";

export const assignToPlayer = (colors, playerIndex, colorId) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  if (!validateColor(colorId)) {
    throw new Error("Incorrect color");
  }
  return colors.map((color, index) =>
    index === playerIndex ? { colorId } : color,
  );
};

export const resetAll = () => createDefaultColors();
