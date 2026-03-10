import { useDocumentTitle } from "core/hooks/useDocumentTitle";
import { RelicsLibrary } from "entities/relic/ui";

const RelicsPage = () => {
  useDocumentTitle("Карты реликвий | Сумерки");
  return <RelicsLibrary />;
};

export default RelicsPage;
