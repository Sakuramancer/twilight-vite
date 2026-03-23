import { relicsStatic } from "./data";

export const validateRelic = (relicId) =>
  Object.keys(relicsStatic).includes(relicId);
