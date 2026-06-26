import { gainsMeta } from "./data";

export const RESET_VALUE = -1;

export const createDefaultGains = () =>
  Object.fromEntries(Object.keys(gainsMeta).map((id) => [id, RESET_VALUE]));
