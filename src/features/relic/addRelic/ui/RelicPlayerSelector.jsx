import classNames from "classnames/bind";
import { colorClasses, PLAYER_COUNT } from "shared/config";
import { useStore } from "shared/store";
import { HexedCanvas, HexLayout } from "shared/ui";
import { playerSelectors } from "entities/player";
import classes from "./RelicPlayerSelector.module.css";

const colorx = classNames.bind(colorClasses);

const anchorSize = 10;
const geometry = { width: 80, height: 60, anchorSize };

const RelicPlayerSelector = ({
  playerSelected,
  setPlayerSelected,
  colorId,
}) => {
  const players = useStore(playerSelectors.selectPlayers);

  const isSelected = playerSelected > -1;

  const colorPickHandler = (playerIndex) => {
    setPlayerSelected(playerIndex);
  };

  const mainClass = colorx({
    [colorId]: true,
  });

  return (
    <div className={mainClass}>
      <HexedCanvas className={classes.coloredCanvas} geometry={geometry}>
        <HexedCanvas.ColorWheel
          className={classes.colorWheelHex}
          colors={players}
          sizeCoef={0.95}
          onClick={colorPickHandler}
        />
        {isSelected && (
          <>
            <HexedCanvas.Hex
              anchorSize={0.9 * anchorSize}
              className={classes.selected}
            />
            <HexedCanvas.Check className={classes.check} />
          </>
        )}
      </HexedCanvas>
    </div>
  );
};

export default RelicPlayerSelector;
