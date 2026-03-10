import { gainsStatic } from "./gains.data";

export const validateGain = (gainId) =>
  Object.keys(gainsStatic).includes(gainId);
