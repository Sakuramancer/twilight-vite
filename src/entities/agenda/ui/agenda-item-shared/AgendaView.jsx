import { HexedCanvas } from "core/canvas";
import { resolveSlot } from "core/utils";

const AgendaView = ({ geometry, FrameSlot, TitleSlot }) => {
  const slots = {
    frame: resolveSlot(FrameSlot),
    title: resolveSlot(TitleSlot),
  };
  return (
    <>
      <HexedCanvas geometry={geometry}>
        <g>
          {<slots.frame.Canvas {...slots.frame.props} />}
          {<slots.title.Canvas {...slots.title.props} />}
        </g>
      </HexedCanvas>
      {<slots.frame.Content {...slots.frame.props} />}
      {<slots.title.Content {...slots.title.props} />}
    </>
  );
};

export { AgendaView };
