import { goalsMeta } from "entities/goal/@x/meta";

const stagePoints = {
  stage1: 1,
  stage2: 2,
  secret: 1
};

export const objectivesMeta = Object.fromEntries(
  Object.entries(goalsMeta)
    .map(([id, value]) => [id, { ...value, points: stagePoints[value.stage] }]),
);
