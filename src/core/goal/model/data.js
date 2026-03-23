import goals from "../data/goals.json";

const phases = {
  status: "Фаза статуса",
  action: "Фаза действий",
  agenda: "Фаза политики",
};

const stages = {
  stage1: { points: 1, color: "goldenrod", label: "очко" },
  stage2: { points: 2, color: "blue", label: "очка" },
  secret: { points: 1, color: "red", label: "очко" },
};

const expansions = {
  main: {},
  pok: { label: "A" },
  omega: { label: "Ω" },
};

export const goalsStatic = Object.fromEntries(
  Object.entries(goals).map(([id, value]) => [
    id,
    {
      ...value,
      content: {
        phase: phases[value.phase],
        stage: stages[value.stage],
        expansion: expansions[value.expansion],
      },
    },
  ]),
);
