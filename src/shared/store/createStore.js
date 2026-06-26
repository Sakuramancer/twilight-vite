export const createStore = ({ initialState, middlewares = [] }) => {
  let state = initialState;
  const listeners = new Set();

  const get = () => state;

  const baseSet = (partial) => {
    state =
      typeof partial === "function" ? partial(state) : { ...state, ...partial };
    listeners.forEach((l) => l(state));
  };

  const set = middlewares.reduceRight(
    (acc, mw) => mw({ get, set: acc }),
    baseSet,
  );

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { get, set, subscribe };
};
