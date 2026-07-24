import { validatePlayerIndex } from "shared/config";
import { createDefaultGains, ACTIVE_VALUE, INACTIVE_VALUE } from "./defaults";
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

export const activateOne = (gains, gainId) => {
  if (!validateGain(gainId)) {
    throw new Error("Incorrect gain id");
  }
  return { ...gains, [gainId]: ACTIVE_VALUE };
};

export const deactivateOne = (gains, gainId) => {
  if (!validateGain(gainId)) {
    throw new Error("Incorrect gain id");
  }
  return { ...gains, [gainId]: INACTIVE_VALUE };
};

export const resetAll = () => createDefaultGains();
