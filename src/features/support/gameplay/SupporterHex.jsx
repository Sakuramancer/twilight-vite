import classNames from "classnames/bind";
import HexedCanvas from "core/canvas/HexedCanvas";
import classes from "./SupporterHex.module.css";

const cx = classNames.bind(classes);

const SupporterHex = ({ selectors, onClick, anchorPoint, anchorSize }) => {
  const { isSupportUsed, isActivated, isAnotherActivated } = selectors;

  const hexClass = cx({
    hex: true,
    "hex-cleared": !isSupportUsed,
    "hex-striped": isSupportUsed,
    "hex-filled": !isSupportUsed && isActivated,
    "hex-lowBrightness": isAnotherActivated,
  });

  const plusClass = cx({
    "plus-filled": isActivated,
    "plus-cleared": !isActivated,
    "plus-lowBrightness": isAnotherActivated,
  });

  return (
    <g>
      <HexedCanvas.Hex
        className={classes.mount}
        anchorPoint={anchorPoint}
        anchorSize={anchorSize}
        sitOnEdge={false}
      />
      <HexedCanvas.Hex
        className={hexClass}
        anchorPoint={anchorPoint}
        anchorSize={anchorSize}
        sitOnEdge={false}
        onClick={onClick}
      />
      {!isSupportUsed && (
        <HexedCanvas.Plus
          className={plusClass}
          anchorPoint={anchorPoint}
          anchorSize={anchorSize}
        />
      )}
    </g>
  );
};

export default SupporterHex;
