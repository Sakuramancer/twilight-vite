import { gainsStatic } from "./gains.data";

export const RESET_VALUE = -1;

export const createDefaultGains = () =>
  Object.fromEntries(Object.keys(gainsStatic).map((id) => [id, RESET_VALUE]));
