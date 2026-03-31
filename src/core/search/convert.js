import { memoize } from "../utils/memoize";
import { enToRuMap } from "./mapping";

export const convertLayout = memoize((text) =>
  text
    .split("")
    .map((char) => enToRuMap[char] || char)
    .join("")
    .toLowerCase(),
);
