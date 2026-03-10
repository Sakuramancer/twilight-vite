import { useDocumentTitle } from "core/hooks/useDocumentTitle";
import { ObjectiveLibrary } from "features/objective/objective-library";

const ObjectivesPage = () => {
  useDocumentTitle("Карты целей | Сумерки");
  return <ObjectiveLibrary />;
};

export default ObjectivesPage;
