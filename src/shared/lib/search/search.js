import { convertLayout } from "./convert";
import { enToRuMap, ruToEnMap } from "./mapping";

const normalize = (str) => str.toLowerCase().trim();

export const search = (index, ids, query) => {
  const normalized = normalize(query);
  if (normalized.length < 2) return ids;

  const convertedRu = convertLayout(normalized, enToRuMap);
  const convertedEn = convertLayout(normalized, ruToEnMap);

  return ids.filter((id) => {
    const item = index[id];
    return (
      item?.searchText.includes(normalized) ||
      item?.searchText.includes(convertedRu) ||
      item?.searchText.includes(convertedEn)
    );
  });
};
