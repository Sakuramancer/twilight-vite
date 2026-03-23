import { useDocumentTitle } from "core/hooks";
import { RelicsLibrary } from "widgets/relics-library";

const RelicsPage = () => {
  useDocumentTitle("Карты реликвий | Сумерки");
  return <RelicsLibrary />;
};

export { RelicsPage };
