import { PLAYER_COUNT } from "core/player";

export const createDefaultFaction = () => ({ factionId: "_unknown" });

export const createDefaultFactions = () =>
  Array.from({ length: PLAYER_COUNT }, createDefaultFaction);
