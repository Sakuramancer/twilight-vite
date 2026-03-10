import classNames from "classnames/bind";
import HexedCanvas from "core/canvas/HexedCanvas";
import colorClasses from "core/data/colors.module.css";
import { useStore } from "core/store/StoreContext";
import classes from "./ColorSelection.module.css";

const cx = classNames.bind(classes);

const geometry = { width: 600, height: 520, anchorSize: 200 };

const ColorSelection = ({ className, onSelection, onConfirm }) => {
  const colors = useStore((s) => s.colors);

  const petalClasses = colors.map(({ colorId }) =>
    cx({
      petal: true,
      [colorClasses[colorId]]: true,
    }),
  );

  const petalClickHandlers = colors.map((_, playerIndex) => () => {
    onSelection(playerIndex);
    onConfirm();
  });

  return (
    <div className={className}>
      <HexedCanvas className={classes.canvas} geometry={geometry}>
        <HexedCanvas.Flower
          petalClasses={petalClasses}
          petalClickHandlers={petalClickHandlers}
        />
      </HexedCanvas>
    </div>
  );
};

export default ColorSelection;
