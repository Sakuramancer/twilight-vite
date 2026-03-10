import { goalsStatic } from "../../goal/model/goal.data";

export const secretsStatic = Object.fromEntries(
  Object.entries(goalsStatic).filter(([_, { stage }]) => stage === "secret"),
);
