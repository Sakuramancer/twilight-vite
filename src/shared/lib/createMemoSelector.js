export const createMemoSelector = (selectors, compute) => {
  let lastInputs = null;
  let lastResult;

  return (state) => {
    const inputs = selectors.map((selector) => selector(state));

    if (
      lastInputs &&
      inputs.length === lastInputs.length &&
      inputs.every((value, index) => value === lastInputs[index])
    ) {
      return lastResult;
    }

    lastInputs = inputs;
    lastResult = compute(...inputs);

    return lastResult;
  };
};
