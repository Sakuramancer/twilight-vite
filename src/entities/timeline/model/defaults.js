import { nanoid } from "nanoid";
import { PLAYER_COUNT } from "shared/config";

export const DATE_RESET_VALUE = -1;
export const ROUND = "Раунд";
export const newRoundLabel = (index) => `${ROUND} ${index}`;

export const createDefaultMark = () => ({
  id: nanoid(),
  label: "",
  date: DATE_RESET_VALUE,
});

export const createDefaults = () => [];
