import { LinkButton } from "shared/ui";
import { resetGameState } from "./commands";
import classes from "./SettingsMenu.module.css";

const SettingsMenu = () => {
  return (
    <div className={classes.buttons}>
      <LinkButton to="/game">Продолжить игру</LinkButton>
      <LinkButton to="/game" onClick={resetGameState}>
        Начать новую игру
      </LinkButton>
      <LinkButton to="/">Назад</LinkButton>
    </div>
  );
};

export default SettingsMenu;
