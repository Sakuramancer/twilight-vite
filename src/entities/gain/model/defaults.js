import { gainsMeta } from "./data";

export const INACTIVE_VALUE = -2;
export const ACTIVE_VALUE = -1;

export const createDefaultGains = () =>
  Object.fromEntries(Object.keys(gainsMeta).map((id) => [id, INACTIVE_VALUE]));
