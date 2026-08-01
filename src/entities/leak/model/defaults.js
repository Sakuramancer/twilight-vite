import { PLAYER_COUNT } from "shared/config";

export const RESET_VALUE = -1;

export const createDefaultPoints = () => Array(PLAYER_COUNT).fill(false);

export const createDefaultLeak = () => ({
  cardId: undefined,
  owner: RESET_VALUE,
  points: createDefaultPoints(),
});
