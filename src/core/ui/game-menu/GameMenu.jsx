import { useState } from "react";
import classNames from "classnames/bind";
import { LinkButton } from "../components";
import { Overlay } from "../overlay";
import { HexedCanvas } from "../../canvas/HexedCanvas";
import { buttonGeometry } from "../../canvas/geometry";
import GameMenuContent from "./GameMenuContent";
import classes from "./GameMenu.module.css";

const cx = classNames.bind(classes);

const GameMenu = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);
  const confirmHandler = () => setShowMenu(false);

  const totalClass = cx([className], { total: true });
  const hexClass = cx({
    hex: true,
    "hex-active": showMenu,
    "hex-inactive": !showMenu,
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
          <GameMenuContent />
        </Overlay>
      )}
    </div>
  );
};

export { GameMenu };
