import { useDocumentTitle } from "core/hooks";
import { AgendasLibrary } from "widgets/agendas-library";

const AgendasPage = () => {
  useDocumentTitle("Карты политики | Сумерки");
  return <AgendasLibrary />;
};

export { AgendasPage };
