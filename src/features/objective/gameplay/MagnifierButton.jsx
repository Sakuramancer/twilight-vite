import classNames from "classnames/bind";
import HexedCanvas from "core/canvas/HexedCanvas";
import { buttonGeometry } from "core/canvas/geometry";
import classes from "./MagnifierButton.module.css";

const cx = classNames.bind(classes);

const MagnifierButton = ({ className, isActive, onToggle }) => {
  const hexClass = cx({
    hex: true,
    active: isActive,
    inactive: !isActive,
  });

  return (
    <div className={className}>
      <HexedCanvas className={classes.canvas} geometry={buttonGeometry}>
        <HexedCanvas.Hex
          className={hexClass}
          onClick={() => onToggle((val) => !val)}
        />
        <HexedCanvas.Magnifier className={classes.magnifier} />
      </HexedCanvas>
    </div>
  );
};

export { MagnifierButton };
