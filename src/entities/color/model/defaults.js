import { PLAYER_COUNT } from "core/config";

export const createDefaultColor = () => ({ colorId: "_default" });

export const createDefaultColors = () =>
  Array.from({ length: PLAYER_COUNT }, createDefaultColor);
