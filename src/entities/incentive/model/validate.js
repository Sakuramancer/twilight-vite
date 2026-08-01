import { incentivesMeta } from "./data";

export const validateCardId = (cardId) =>
  Object.keys(incentivesMeta).includes(cardId);
