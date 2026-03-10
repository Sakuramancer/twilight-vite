import { PLAYER_COUNT } from "core/config";
import { colorsStatic } from "../../../core/data/colors.data";

export const validateColor = (colorId) =>
  Object.keys(colorsStatic).includes(colorId);
