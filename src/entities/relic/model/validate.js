import { relicsMeta } from "./data";

export const validateRelic = (relicId) =>
  Object.keys(relicsMeta).includes(relicId);
