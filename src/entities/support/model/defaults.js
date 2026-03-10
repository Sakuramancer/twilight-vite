import { PLAYER_COUNT } from "core/config";

export const RESET_VALUE = -1;

export const createDefaultSupports = () =>
  Array(PLAYER_COUNT).fill(RESET_VALUE);
