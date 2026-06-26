import { PLAYER_COUNT } from "shared/config";

export const createDefaultPlayer = () => ({
  colorId: "_default",
  factionId: "_unknown",
  influence: 0,
});

export const createDefaultPlayers = () =>
  Array.from({ length: PLAYER_COUNT }, createDefaultPlayer);
