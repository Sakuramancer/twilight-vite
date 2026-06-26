import classNames from "classnames/bind";
import { HexedCanvas, useHexedCanvasContext } from "shared/ui";
import classes from "./ColorLineHex.module.css";

const cx = classNames.bind(classes);

const xcoef = 3.9;
const sizeCoef = 0.4;

const Canvas = ({ anchorPoint, anchorSize, votes, colors, onClick }) => {
  const context = useHexedCanvasContext();
  if (!anchorPoint) {
    anchorPoint = context.anchorPoint ?? {
      x: 0.5 * context.width,
      y: 0.5 * context.height,
    };
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }

  const getVoteClass = (vote) => (vote ? "voted" : "notVoted");

  const colorClassNames = votes.map((vote) =>
    cx({
      [`colorHex-${getVoteClass(vote)}`]: true,
    }),
  );

  const colorLineClass = cx({
    colorLine: true,
  });

  return (
    <>
      <HexedCanvas.ColorLine
        className={classes.mount}
        anchorPoint={{
          x: xcoef * anchorSize,
          y: anchorPoint.y,
        }}
        anchorSize={sizeCoef * anchorSize}
      />
      <HexedCanvas.ColorLine
        className={colorLineClass}
        colorClassNames={colorClassNames}
        anchorPoint={{
          x: xcoef * anchorSize,
          y: anchorPoint.y,
        }}
        anchorSize={sizeCoef * anchorSize}
        colors={colors}
        onClick={onClick}
      />
    </>
  );
};

const ColorLineHex = { Canvas };
export { ColorLineHex };
