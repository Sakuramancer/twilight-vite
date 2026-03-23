import { useDocumentTitle } from "core/hooks";
import { SettingsView } from "widgets/game-settings/ui";

const NewGamePage = () => {
  useDocumentTitle("Новая игра | Сумерки");
  return <SettingsView />;
};

export { NewGamePage };
