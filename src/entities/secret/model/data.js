import { goalsMeta } from "entities/goal/@x/meta";

export const secretsMeta = Object.fromEntries(
  Object.entries(goalsMeta).filter(([_, { stage }]) => stage === "secret"),
);
