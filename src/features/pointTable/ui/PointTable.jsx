import { PointColumn, PointColumnsLayout } from "core/ui";
import { ExtraActions, ExtraContent } from "entities/extra/ui";
import { RelicManager } from "../../relic/gameplay/RelicManager";
import { SecretManager } from "../../secret/SecretManager";
import { SupportManager } from "../../support/gameplay";

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
