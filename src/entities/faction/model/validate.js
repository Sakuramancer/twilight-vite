import { factionsStatic } from "./data";

export const validateFaction = (factionId) =>
  Object.keys(factionsStatic).includes(factionId);
