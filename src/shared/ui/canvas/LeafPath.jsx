import { useHexedCanvasContext } from "./HexedCanvasContext";
import { useButtonContext } from "../components/ButtonContext";

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
  const resolvedAnchorPoint = anchorPoint ?? {
    x: 0.5 * context.width,
    y: 0.5 * context.height,
  };
  const resolvedAnchorSize = anchorSize ?? context.anchorSize;

  const buttonProps = useButtonContext();

  if (!["forward", "backward"].includes(leafType)) {
    leafType = "forward";
  }
  const directionMult = leafType === "forward" ? 1 : -1;
  const innerDelta = innerMult * resolvedAnchorSize;
  const outerDelta = outerMult * resolvedAnchorSize;

  const innerPoints = dataAngles.map((angle) => [
    resolvedAnchorPoint.x +
      directionMult * (resolvedAnchorSize * Math.cos(angle) + innerDelta),
    resolvedAnchorPoint.y + resolvedAnchorSize * Math.sin(angle),
  ]);

  const outerPoints = dataAngles
    .map((angle) => [
      resolvedAnchorPoint.x +
        directionMult * (resolvedAnchorSize * Math.cos(angle) + outerDelta),
      resolvedAnchorPoint.y + resolvedAnchorSize * Math.sin(angle),
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
