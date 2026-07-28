import { useEffect, useState } from "react";
import { useDebounce } from "shared/lib";
import { getTimelineCommands } from "../ports";

export const useTimelineMarkLabel = (id, initialValue) => {
  const commands = getTimelineCommands();

  const [value, setValue] = useState(initialValue);
  const query = useDebounce(value, 300);

  useEffect(() => {
    commands.updateMarkLabel(id, query);
  }, [id, query, commands]);

  return { value, setValue };
};
