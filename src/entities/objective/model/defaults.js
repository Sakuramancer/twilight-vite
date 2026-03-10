import { PLAYER_COUNT } from "core/config";

export const OBJECTIVE_COUNT = 10;
export const DATE_RESET_VALUE = -1;

export const createDefaultPoints = () => Array(PLAYER_COUNT).fill(false);

export const createDefaultObjective = () => ({
  cardId: undefined,
  points: createDefaultPoints(),
  date: DATE_RESET_VALUE,
});

export const createDefaults = () =>
  Array.from({ length: OBJECTIVE_COUNT }, () => createDefaultObjective());
