import { HexedCanvas } from "core/canvas";
import { resolveSlot } from "core/utils";

const AgendaView = ({ geometry, FrameSlot, PlayerSlot, TitleSlot }) => {
  const slots = {
    frame: resolveSlot(FrameSlot),
    title: resolveSlot(TitleSlot),
    player: resolveSlot(PlayerSlot),
  };
  return (
    <>
      <HexedCanvas geometry={geometry}>
        <g>
          {<slots.frame.Canvas {...slots.frame.props} />}
          {<slots.title.Canvas {...slots.title.props} />}
          {<slots.player.Canvas {...slots.player.props} />}
        </g>
      </HexedCanvas>
      {<slots.frame.Content {...slots.frame.props} />}
      {<slots.title.Content {...slots.title.props} />}
      {<slots.player.Content {...slots.player.props} />}
    </>
  );
};

export { AgendaView };
