import { validatePlayerIndex } from "core/player";
import {
  createDefaultPoints,
  createDefaultObjective,
  createDefaults,
} from "./defaults";
import { validateCardIndex, validateCardId } from "./validate";

export const setNew = (objectives, cardIndex, cardId) => {
  if (!validateCardIndex(cardIndex)) {
    throw new Error("Incorrect card index");
  }
  if (!validateCardId(cardId)) {
    throw new Error("Incorrect card id");
  }
  return objectives.map((objective, index) =>
    index === cardIndex
      ? { ...objective, cardId, date: Date.now() }
      : objective,
  );
};

export const togglePoints = (objectives, cardIndex, playerIndex) => {
  if (!validateCardIndex(cardIndex)) {
    throw new Error("Incorrect card index");
  }
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  return objectives.map((objective, objectiveIndex) =>
    objectiveIndex === cardIndex
      ? {
          ...objective,
          points: objective.points.map((value, pointsIndex) =>
            pointsIndex === playerIndex ? !value : value,
          ),
        }
      : objective,
  );
};

export const resetOne = (objectives, cardIndex) => {
  if (!validateCardIndex(cardIndex)) {
    throw new Error("Incorrect card index");
  }
  return objectives.map((objective, index) =>
    index === cardIndex ? createDefaultObjective() : objective,
  );
};

export const resetPoints = (objectives, cardIndex) => {
  if (!validateCardIndex(cardIndex)) {
    throw new Error("Incorrect card index");
  }
  return objectives.map((objective, index) =>
    index === cardIndex
      ? { ...objective, points: createDefaultPoints() }
      : objective,
  );
};

export const resetAll = (_) => createDefaults();
