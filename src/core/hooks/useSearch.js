import { useMemo, useState } from "react";
import { useDebounce } from "./useDebounce";
import { search } from "../search/search";

export const useSearch = (index, ids) => {
  const [inputValue, setInputValue] = useState("");
  const query = useDebounce(inputValue, 300);

  const resultIds = useMemo(
    () => search(index, ids, query),
    [index, ids, query],
  );

  return [inputValue, setInputValue, resultIds];
};
