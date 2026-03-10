import { useDocumentTitle } from "core/hooks/useDocumentTitle";
import { SettingsView } from "features/gameSettings/ui";

const NewGamePage = () => {
  useDocumentTitle("Новая игра | Сумерки");
  return <SettingsView />;
};

export default NewGamePage;
