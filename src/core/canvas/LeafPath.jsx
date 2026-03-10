import { useHexedCanvasContext } from "./HexedCanvasContext";
import { useButtonContext } from "../ui/ButtonContext";

const innerMult = 0.12;
const outerMult = 0.75;
const dataAngles = [-Math.PI / 3, 0, Math.PI / 3];

const LeafPath = ({
  className,
  leafType,
  anchorPoint,
  anchorSize,
  ...props
}) => {
  const context = useHexedCanvasContext();
  if (!anchorPoint) {
    anchorPoint = { x: 0.5 * context.width, y: 0.5 * context.height };
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }
  const buttonProps = useButtonContext();

  if (!["forward", "backward"].includes(leafType)) {
    leafType = "forward";
  }
  const directionMult = leafType === "forward" ? 1 : -1;
  const innerDelta = innerMult * anchorSize;
  const outerDelta = outerMult * anchorSize;

  const innerPoints = dataAngles.map((angle) => [
    anchorPoint.x + directionMult * (anchorSize * Math.cos(angle) + innerDelta),
    anchorPoint.y + anchorSize * Math.sin(angle),
  ]);

  const outerPoints = dataAngles
    .map((angle) => [
      anchorPoint.x +
        directionMult * (anchorSize * Math.cos(angle) + outerDelta),
      anchorPoint.y + anchorSize * Math.sin(angle),
    ])
    .reverse();

  const path = [
    ...innerPoints.map(([x, y]) => `${x},${y}`),
    ...outerPoints.map(([x, y]) => `${x},${y}`),
  ].join(" ");

  return (
    <path className={className} {...props} {...buttonProps} d={`M${path}z`} />
  );
};

export default LeafPath;
