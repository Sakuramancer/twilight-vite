import { validatePlayerIndex } from "shared/config";
import { createDefaultIncentive, createDefaultPoints } from "./defaults";
import { validateCardId } from "./validate";

export const setNew = (incentive, cardId) => {
  if (!validateCardId(cardId)) {
    throw new Error("Incorrect card id");
  }
  return { ...incentive, cardId };
};

export const togglePoints = (incentive, playerIndex) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  return {
    ...incentive,
    points: incentive.points.map((value, pointsIndex) =>
      pointsIndex === playerIndex ? !value : value,
    ),
  };
};

export const resetPoints = (incentive) => {
  return { ...incentive, points: createDefaultPoints() };
};

export const reset = (_) => {
  return createDefaultIncentive();
};
