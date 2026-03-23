import { useDocumentTitle } from "core/hooks";
import { Error } from "core/ui";

const ErrorPage = () => {
  useDocumentTitle("Ошибка | Сумерки");
  return <Error />;
};

export { ErrorPage };
