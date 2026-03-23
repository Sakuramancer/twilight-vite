import { PLAYER_COUNT } from "core/player";
import { colorsStatic } from "core/data/colors.data";

export const validateColor = (colorId) =>
  Object.keys(colorsStatic).includes(colorId);
