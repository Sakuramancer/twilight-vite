import { useDocumentTitle } from "core/hooks/useDocumentTitle";
import Error from "core/ui/Error";

const ErrorPage = () => {
  useDocumentTitle("Ошибка | Сумерки");
  return <Error />;
};

export default ErrorPage;
