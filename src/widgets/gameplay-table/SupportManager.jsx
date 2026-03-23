import { PointColumn } from "core/ui";
import { SupportActions, SupportContent } from "features/support/gameplay";

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
