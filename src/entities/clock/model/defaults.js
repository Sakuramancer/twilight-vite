import { nanoid } from "nanoid";
import { PLAYER_COUNT } from "shared/config";

export const DATE_RESET_VALUE = -1;
export const ROUND_MASK = "Раунд";
export const newRoundLabel = (index) => `${ROUND_MASK} ${index}`;

export const createDefaultClock = () => ({
  id: nanoid(),
  label: "",
  date: DATE_RESET_VALUE,
});

export const createDefaults = () => [];
