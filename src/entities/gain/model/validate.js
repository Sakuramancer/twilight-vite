import { gainsMeta } from "./data";

export const validateGain = (gainId) =>
  Object.keys(gainsMeta).includes(gainId);
