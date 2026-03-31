import { PointColumn, PointColumnsLayout } from "core/ui";
import { ExtraActions, ExtraContent } from "entities/extra/ui";
import { AgendaManager } from "./AgendaManager";
import { RelicManager } from "./RelicManager";
import { SecretManager } from "./SecretManager";
import { SupportManager } from "./SupportManager";

const PointTable = ({ className }) => {
  return (
    <div className={className}>
      <PointColumnsLayout>
        <SecretManager />
        <SupportManager />
        <PointColumn
          title="Экстра"
          content={<ExtraContent />}
          actions={<ExtraActions />}
        />
        <RelicManager />
        <AgendaManager />
      </PointColumnsLayout>
    </div>
  );
};

export { PointTable };
