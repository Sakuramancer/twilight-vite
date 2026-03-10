import { validatePlayerIndex } from "core/config";
import { createDefaultRelic, createDefaultRelics } from "./defaults";
import { validateRelic } from "./validate";

export const assignPlayer = (relics, relicId, playerIndex) => {
  if (!validateRelic(relicId)) {
    throw new Error("Incorrect relic id");
  }
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  const relic = relics[relicId] ?? createDefaultRelic();
  return {
    ...relics,
    [relicId]: { ...relic, playerIndex },
  };
};

export const togglePoint = (relics, relicId) => {
  if (!validateRelic(relicId)) {
    throw new Error("Incorrect relic id");
  }
  if (!(relicId in relics)) return relics;
  const relic = relics[relicId];
  return { ...relics, [relicId]: { ...relic, pointTaken: !relic.pointTaken } };
};

export const togglePurged = (relics, relicId) => {
  if (!validateRelic(relicId)) {
    throw new Error("Incorrect relic id");
  }
  if (!(relicId in relics)) return relics;
  const relic = relics[relicId];
  return { ...relics, [relicId]: { ...relic, purged: !relic.purged } };
};

export const resetOne = (relics, relicId) => {
  if (!validateRelic(relicId)) {
    throw new Error("Incorrect relic id");
  }
  const { [relicId]: _, ...rest } = relics;
  return rest;
};

export const resetAll = (_) => createDefaultRelics();
