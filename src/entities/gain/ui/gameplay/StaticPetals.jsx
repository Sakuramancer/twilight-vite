import { PLAYER_COUNT } from "core/config";
import HexedCanvas from "core/canvas/HexedCanvas";
import classes from "./StaticPetals.module.css";

const petalList = [...Array(PLAYER_COUNT).keys()];
const geometry = { width: 600, height: 520, anchorSize: 200 };

const StaticPetals = ({ className, onClick }) => {
  const petalClasses = petalList.map((_) => classes.petal);

  return (
    <div className={className}>
      <HexedCanvas className={classes.canvas} geometry={geometry}>
        <HexedCanvas.Flower
          petalClasses={petalClasses}
          onPetalClick={onClick}
        />
      </HexedCanvas>
    </div>
  );
};

export default StaticPetals;
