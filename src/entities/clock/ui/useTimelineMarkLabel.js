import { useEffect, useState } from "react";
import { useDebounce } from "shared/lib";
import { getClockCommands } from "../ports";

export const useTimelineMarkLabel = (index, initialValue) => {
  const commands = getClockCommands();

  const [value, setValue] = useState(initialValue);
  const query = useDebounce(value, 300);

  useEffect(() => {
    commands.updateClockLabel(index, query);
  }, [index, query, commands]);

  return { value, setValue };
};
