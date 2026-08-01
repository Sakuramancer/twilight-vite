import { leaksMeta } from "./data";

export const validateCardId = (cardId) =>
  Object.keys(leaksMeta).includes(cardId);
