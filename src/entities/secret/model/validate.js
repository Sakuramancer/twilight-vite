import { SECRET_COUNT } from "./defaults";

export const validateSecretIndex = (index) =>
  index >= 0 && index < SECRET_COUNT;
