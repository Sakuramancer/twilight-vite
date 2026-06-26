import { useDocumentTitle } from "shared/lib";
import { Error } from "shared/ui";

const ErrorPage = () => {
  useDocumentTitle("Ошибка | Сумерки");
  return <Error />;
};

export { ErrorPage };
