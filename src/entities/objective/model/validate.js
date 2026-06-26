import { OBJECTIVE_COUNT } from "./defaults";
import { objectivesMeta } from "./data";

export const validateCardId = (cardId) =>
  Object.keys(objectivesMeta).includes(cardId);

export const validateCardIndex = (index) =>
  index >= 0 && index < OBJECTIVE_COUNT;
