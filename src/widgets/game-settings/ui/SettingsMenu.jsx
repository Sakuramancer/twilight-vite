import { LinkButton } from "core/ui";
import { settingsCommands } from "../model/commands";
import classes from "./SettingsMenu.module.css";

const SettingsMenu = () => {
  return (
    <div className={classes.buttons}>
      <LinkButton to="/game">Продолжить игру</LinkButton>
      <LinkButton to="/game" onClick={settingsCommands.resetGameState}>
        Начать новую игру
      </LinkButton>
      <LinkButton to="/">Назад</LinkButton>
    </div>
  );
};

export default SettingsMenu;
