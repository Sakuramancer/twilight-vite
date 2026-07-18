import { PLAYER_COUNT } from "shared/config";

export const DATE_RESET_VALUE = -1;

export const createDefaultClock = () => ({
  label: "",
  date: DATE_RESET_VALUE,
});

export const createDefaults = () => [];
