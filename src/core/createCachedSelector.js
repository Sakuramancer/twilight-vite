export const createCachedFactorySelector = (factory) => {
  const rootCache = new Map();

  const cachedFactory = (...args) => {
    let currentCache = rootCache;

    for (const arg of args) {
      if (!currentCache.has(arg)) {
        currentCache.set(arg, new Map());
      }
      currentCache = currentCache.get(arg);
    }

    if (!currentCache.has("__selector__")) {
      currentCache.set("__selector__", factory(...args));
    }

    return currentCache.get("__selector__");
  };

  cachedFactory.clearCache = () => {
    rootCache.clear();
  };

  return cachedFactory;
};
