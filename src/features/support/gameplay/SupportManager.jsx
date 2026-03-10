import { PointColumn } from "core/ui";
import { SupportContent } from "./SupportContent";
import { SupportActions } from "./SupportActions";

const SupportManager = () => {
  return (
    <PointColumn
      title="Поддержка претендента"
      content={<SupportContent />}
      actions={<SupportActions />}
    />
  );
};

export { SupportManager };
