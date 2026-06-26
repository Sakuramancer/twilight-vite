import { factionsMeta } from "./data";
import { colorsMeta } from "shared/config/colors.data";

export const validateFaction = (factionId) =>
  Object.keys(factionsMeta).includes(factionId);

export const validateColor = (colorId) =>
  Object.keys(colorsMeta).includes(colorId);
