import { factionsStatic } from "./factions.data";

export const validateFaction = (factionId) =>
  Object.keys(factionsStatic).includes(factionId);
