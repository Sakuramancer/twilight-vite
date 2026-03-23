import { goalsStatic } from "core/goal/model";

export const secretsStatic = Object.fromEntries(
  Object.entries(goalsStatic).filter(([_, { stage }]) => stage === "secret"),
);
