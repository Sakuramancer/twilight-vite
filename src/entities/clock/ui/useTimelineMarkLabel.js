import { useEffect, useState } from "react";
import { useDebounce } from "shared/lib";
import { getClockCommands } from "../ports";

export const useTimelineMarkLabel = (id, initialValue) => {
  const commands = getClockCommands();

  const [value, setValue] = useState(initialValue);
  const query = useDebounce(value, 300);

  useEffect(() => {
    commands.updateClockLabel(id, query);
  }, [id, query, commands]);

  return { value, setValue };
};
