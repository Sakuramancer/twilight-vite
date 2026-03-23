import { PLAYER_COUNT } from "core/player";

export const createDefaultColor = () => ({ colorId: "_default" });

export const createDefaultColors = () =>
  Array.from({ length: PLAYER_COUNT }, createDefaultColor);
