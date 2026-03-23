import { PointColumn, PointColumnsLayout } from "core/ui";
import { ExtraActions, ExtraContent } from "entities/extra/ui";
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
        {/* <PointColumn
        title="Законы"
        content={<AgendaContent />}
        actions={<AgendaActions />}
        /> */}
      </PointColumnsLayout>
    </div>
  );
};

export { PointTable };
