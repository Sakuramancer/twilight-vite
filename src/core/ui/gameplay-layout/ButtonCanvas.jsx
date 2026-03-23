import classNames from "classnames/bind";
import { HexedCanvas } from "../../canvas/HexedCanvas";
import { buttonGeometry } from "../../canvas/geometry";
import classes from "./ButtonCanvas.module.css";

const cx = classNames.bind(classes);

const ButtonCanvas = ({ symbol, isActive, onSetActive }) => {
  const hexClass = cx({
    hex: true,
    active: isActive,
    inactive: !isActive,
  });

  return (
    <HexedCanvas className={classes.canvas} geometry={buttonGeometry}>
      <HexedCanvas.Hex
        className={hexClass}
        onClick={onSetActive}
        sitOnEdge={false}
      />
      {symbol}
    </HexedCanvas>
  );
};

export { ButtonCanvas };
