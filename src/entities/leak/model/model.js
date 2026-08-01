import { validatePlayerIndex } from "shared/config";
import { createDefaultLeak, createDefaultPoints } from "./defaults";
import { validateCardId } from "./validate";

export const setNew = (leak, cardId, playerIndex) => {
  if (!validateCardId(cardId)) {
    throw new Error("Incorrect card id");
  }
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  return {
    ...leak,
    cardId,
    owner: playerIndex,
    points: leak.points.map((value, pointsIndex) =>
      pointsIndex === playerIndex ? true : value,
    ),
  };
};

export const togglePoints = (leak, playerIndex) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  return {
    ...leak,
    points: leak.points.map((value, pointsIndex) =>
      pointsIndex === playerIndex ? !value : value,
    ),
  };
};

export const resetPoints = (leak) => {
  return { ...leak, points: createDefaultPoints() };
};

export const reset = (_) => {
  return createDefaultLeak();
};
