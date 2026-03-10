import { goalsStatic } from "../../goal/model/goal.data";

const stagePoints = {
  stage1: 1,
  stage2: 2,
};

export const objectivesStatic = Object.fromEntries(
  Object.entries(goalsStatic)
    .filter(([_, { stage }]) => stage !== "secret")
    .map(([id, value]) => [id, { ...value, points: stagePoints[value.stage] }]),
);
