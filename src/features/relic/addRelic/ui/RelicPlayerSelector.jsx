import classNames from "classnames/bind";
import HexLayout from "core/ui/HexLayout";
import { PLAYER_COUNT } from "core/config";
import { useStore } from "core/store/StoreContext";
import HexedCanvas from "core/canvas/HexedCanvas";
import colors from "core/data/colors.module.css";
import classes from "./RelicPlayerSelector.module.css";

const colorx = classNames.bind(colors);

const anchorSize = 10;
const geometry = { width: 80, height: 60, anchorSize };

const RelicPlayerSelector = ({
  playerSelected,
  setPlayerSelected,
  colorId,
}) => {
  const colorsStatic = useStore((s) => s.colors);

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
          className={classes.colorWheel}
          colors={colorsStatic}
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
