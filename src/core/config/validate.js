import { PLAYER_COUNT } from "./defaults";

export const validatePlayerIndex = (playerIndex) =>
  playerIndex >= 0 && playerIndex < PLAYER_COUNT;
