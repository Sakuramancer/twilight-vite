import { validatePlayerIndex } from "shared/config";
import { factionsMeta } from "./data";
import { createDefaultPlayers } from "./defaults";
import { validateColor, validateFaction } from "./validate";

export const assignColorToPlayer = (players, playerIndex, colorId) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  if (!validateColor(colorId)) {
    throw new Error("Incorrect color");
  }
  return players.map((player, index) =>
    index === playerIndex ? { ...player, colorId } : player,
  );
};

export const assignFactionToPlayer = (players, playerIndex, factionId) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect position");
  }
  if (!validateFaction(factionId)) {
    throw new Error("Incorrect faction");
  }
  return players.map((player, index) =>
    index === playerIndex ? { ...player, factionId } : player,
  );
};

export const toggleFactionOnPlayer = (players, playerIndex) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect position");
  }
  const factionId = players[playerIndex].factionId;
  const switchTo = factionsMeta[factionId].switchTo;
  if (switchTo === undefined) return players;
  return players.map((player, index) =>
    index === playerIndex ? { ...player, factionId: switchTo } : player,
  );
};

export const setInfluence = (players, playerIndex, influence) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect position");
  }
  return players.map((player, index) =>
    index === playerIndex ? { ...player, influence } : player,
  );
};

export const resetAll = () => createDefaultPlayers();
