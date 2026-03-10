import { relicsStatic } from "./relics.data";

export const validateRelic = (relicId) =>
  Object.keys(relicsStatic).includes(relicId);
