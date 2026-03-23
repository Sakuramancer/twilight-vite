import classNames from "classnames/bind";
import { LinkButton } from "../components";
import { useOverlayContext } from "../overlay";
import buttons from "../../styles/buttons.module.css";
import classes from "./GameMenuContent.module.css";

const cx = classNames.bind(classes);

const GameMenuContent = () => {
  const { onConfirm } = useOverlayContext();
  const greenButtonClass = cx({ button: true, [buttons.green]: true });

  return (
    <div className={classes.main}>
      <LinkButton to="/newGame">Начать новую игру</LinkButton>
      <LinkButton to="/newGame">Настроить цвета и фракции</LinkButton>
      <LinkButton to="/">Вернуться на главную</LinkButton>
      <div className={greenButtonClass} onClick={onConfirm}>
        Назад
      </div>
    </div>
  );
};

export default GameMenuContent;
