import { useSyncExternalStore } from "react";
import { rootStore } from "./rootStore";

export const identitySelector = (s) => s;

export const useRootStore = (selector = identitySelector) =>
  useSyncExternalStore(
    rootStore.subscribe,
    () => selector(rootStore.get()),
    () => selector(rootStore.get()),
  );
