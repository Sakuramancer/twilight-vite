import { OBJECTIVE_COUNT } from "./defaults";
import { objectivesStatic } from "./data";

export const validateCardId = (cardId) =>
  Object.keys(objectivesStatic).includes(cardId);

export const validateCardIndex = (index) =>
  index >= 0 && index < OBJECTIVE_COUNT;
