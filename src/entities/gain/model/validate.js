import { gainsStatic } from "./data";

export const validateGain = (gainId) =>
  Object.keys(gainsStatic).includes(gainId);
