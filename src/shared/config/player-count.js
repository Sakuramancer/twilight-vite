export const PLAYER_COUNT = 6;

export const validatePlayerIndex = (playerIndex) =>
  playerIndex >= 0 && playerIndex < PLAYER_COUNT;
