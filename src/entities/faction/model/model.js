import { validatePlayerIndex } from "core/player";
import { validateFaction } from "./validate";
import { factionsStatic } from "./data";
import { createDefaultFactions } from "./defaults";

export const assignToPlayer = (factions, playerIndex, factionId) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect position");
  }
  if (!validateFaction(factionId)) {
    throw new Error("Incorrect faction");
  }
  return factions.map((faction, index) =>
    index === playerIndex ? { factionId } : faction,
  );
};

export const switchOnPlayer = (factions, playerIndex) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect position");
  }
  const factionId = factions[playerIndex].factionId;
  const switchTo = factionsStatic[factionId].switchTo;
  if (switchTo === undefined) return factions;
  return factions.map((faction, index) =>
    index === playerIndex ? { factionId: switchTo } : faction,
  );
};

export const resetAll = () => createDefaultFactions();
