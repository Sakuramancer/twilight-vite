import { OBJECTIVE_COUNT } from "./defaults";
import { objectivesStatic } from "./objectives.data";

export const validateCardId = (cardId) =>
  Object.keys(objectivesStatic).includes(cardId);

export const validateCardIndex = (index) =>
  index >= 0 && index < OBJECTIVE_COUNT;
