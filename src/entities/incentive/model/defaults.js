import { PLAYER_COUNT } from "shared/config";

export const createDefaultPoints = () => Array(PLAYER_COUNT).fill(false);

export const createDefaultIncentive = () => ({
  cardId: undefined,
  points: createDefaultPoints(),
});
