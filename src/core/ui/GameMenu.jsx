import { useState } from "react";
import classNames from "classnames/bind";
import Overlay from "./Overlay";
import LinkButton from "./LinkButton";
import HexedCanvas from "../canvas/HexedCanvas";
import { buttonGeometry } from "../canvas/geometry";
import buttons from "./buttons.module.css";
import classes from "./GameMenu.module.css";

const cx = classNames.bind(classes);

const GameMenu = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);
  const confirmHandler = () => setShowMenu(false);

  const totalClass = cx([className], { total: true });
  const greenButtonClass = cx({ button: true, [buttons.green]: true });
  const hexClass = cx({
    hex: true,
    active: showMenu,
    inactive: !showMenu,
  });

  return (
    <div className={totalClass}>
      <HexedCanvas className={classes.canvas} geometry={buttonGeometry}>
        <HexedCanvas.Hex
          className={hexClass}
          onClick={() => setShowMenu(true)}
        />
        <HexedCanvas.Burger className={classes.burger} />
      </HexedCanvas>
      {showMenu && (
        <Overlay
          className={classes.overlay}
          containerId="menu"
          onDiscard={confirmHandler}
          onConfirm={confirmHandler}
        >
          <div className={classes.main}>
            <LinkButton to="/newGame">Начать новую игру</LinkButton>
            <LinkButton to="/newGame">Настроить цвета и фракции</LinkButton>
            <LinkButton to="/">Вернуться на главную</LinkButton>
            <div className={greenButtonClass} onClick={confirmHandler}>
              Назад
            </div>
          </div>
        </Overlay>
      )}
    </div>
  );
};

export default GameMenu;
