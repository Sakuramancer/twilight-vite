import { goalsMeta } from "entities/goal/@x/meta";

export const leaksMeta = Object.fromEntries(
  Object.entries(goalsMeta).filter(([_, { stage }]) => stage === "secret"),
);
