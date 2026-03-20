import HexedCanvas from "core/canvas/HexedCanvas";
import { resolveSlot } from "./resolveSlot";

const NullComponent = () => null;

const RelicView = ({
  geometry,
  FrameSlot,
  TitleSlot,
  PlayerSlot,
  PointSlot,
  ColorsSlot,
}) => {
  const slots = {
    frame: resolveSlot(FrameSlot),
    title: resolveSlot(TitleSlot),
    player: resolveSlot(PlayerSlot),
    point: resolveSlot(PointSlot),
    colors: resolveSlot(ColorsSlot),
  };
  return (
    <>
      <HexedCanvas geometry={geometry}>
        <g>
          {<slots.frame.Canvas {...slots.frame.props} />}
          {<slots.title.Canvas {...slots.title.props} />}
          {<slots.player.Canvas {...slots.player.props} />}
          {<slots.point.Canvas {...slots.point.props} />}
          {<slots.colors.Canvas {...slots.colors.props} />}
        </g>
      </HexedCanvas>
      {<slots.frame.Content {...slots.frame.props} />}
      {<slots.title.Content {...slots.title.props} />}
      {<slots.player.Content {...slots.player.props} />}
      {<slots.point.Content {...slots.point.props} />}
    </>
  );
};

export { RelicView };
