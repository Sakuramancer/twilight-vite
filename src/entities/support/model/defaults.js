import { PLAYER_COUNT } from "shared/config";

export const RESET_VALUE = -1;

export const createDefaultSupports = () =>
  Array(PLAYER_COUNT).fill(RESET_VALUE);
