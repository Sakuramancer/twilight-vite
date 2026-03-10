import { validatePlayerIndex } from "core/config";
import { RESET_VALUE, createDefaultSupports } from "./defaults";

export const update = (stored, supporterIndex, receiverIndex) => {
  if (!validatePlayerIndex(supporterIndex)) {
    throw new Error("Incorrect supporter player index");
  }
  if (!validatePlayerIndex(receiverIndex)) {
    throw new Error("Incorrect receiver player index");
  }
  return stored.map((value, index) =>
    index === supporterIndex ? receiverIndex : value,
  );
};

export const resetOne = (stored, supporterIndex) => {
  if (!validatePlayerIndex(supporterIndex)) {
    throw new Error("Incorrect supporter player index");
  }
  return stored.map((value, index) =>
    index === supporterIndex ? RESET_VALUE : value,
  );
};

export const resetAll = () => {
  return createDefaultSupports();
};
