import { HexedCanvas } from "core/canvas";
import colors from "core/data/colors.module.css";
import classes from "./ReceivedHex.module.css";

const ReceivedHex = ({ colorId, onClick, anchorPoint, anchorSize }) => {
  return (
    <g className={colors[colorId]}>
      <HexedCanvas.Hex
        className={classes.hex}
        anchorPoint={anchorPoint}
        anchorSize={anchorSize}
        sitOnEdge={false}
        onClick={onClick}
      />
      <HexedCanvas.Check
        className={classes.check}
        anchorPoint={anchorPoint}
        anchorSize={anchorSize}
      />
    </g>
  );
};

export default ReceivedHex;
