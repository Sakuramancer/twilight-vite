import { validatePlayerIndex } from "core/config";
import { createDefaultGains, RESET_VALUE } from "./defaults";
import { validateGain } from "./validate";

export const assignToPlayer = (gains, gainId, playerIndex) => {
  if (!validateGain(gainId)) {
    throw new Error("Incorrect gain id");
  }
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  return { ...gains, [gainId]: playerIndex };
};

export const resetOne = (gains, gainId) => {
  if (!validateGain(gainId)) {
    throw new Error("Incorrect gain id");
  }
  return { ...gains, [gainId]: RESET_VALUE };
};

export const resetAll = () => createDefaultGains();
