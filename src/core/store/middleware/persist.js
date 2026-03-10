export const persistBySlices = (slices) => {
  return ({ get, set }) =>
    (partial) => {
      set(partial);
      const state = get();
      slices.forEach((slice) => {
        const data = slice.selector(state);
        slice.storage.set(slice.storageKey, data);
      });
    };
};
