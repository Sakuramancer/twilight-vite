import { resolveSlot } from "shared/lib";
import { HexedCanvas } from "shared/ui";

const AgendaView = ({
  geometry,
  FrameSlot,
  PlayerSlot,
  TitleSlot,
  PointSlot,
  VoteSlot,
  ColorLineSlot,
}) => {
  const slots = {
    frame: resolveSlot(FrameSlot),
    title: resolveSlot(TitleSlot),
    player: resolveSlot(PlayerSlot),
    point: resolveSlot(PointSlot),
    vote: resolveSlot(VoteSlot),
    colorLine: resolveSlot(ColorLineSlot),
  };
  return (
    <>
      <HexedCanvas geometry={geometry}>
        <g>
          {<slots.frame.Canvas {...slots.frame.props} />}
          {<slots.title.Canvas {...slots.title.props} />}
          {<slots.player.Canvas {...slots.player.props} />}
          {<slots.point.Canvas {...slots.point.props} />}
          {<slots.vote.Canvas {...slots.vote.props} />}
          {<slots.colorLine.Canvas {...slots.colorLine.props} />}
        </g>
      </HexedCanvas>
      {<slots.frame.Content {...slots.frame.props} />}
      {<slots.title.Content {...slots.title.props} />}
      {<slots.player.Content {...slots.player.props} />}
      {<slots.point.Content {...slots.point.props} />}
      {<slots.vote.Content {...slots.vote.props} />}
      {<slots.colorLine.Content {...slots.colorLine.props} />}
    </>
  );
};

export { AgendaView };
