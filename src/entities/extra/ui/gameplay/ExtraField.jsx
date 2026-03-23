import { useStore } from "core/store";
import { PlayerNumberField } from "core/ui";
import { extraSelectors } from "../../model/selectors";
import { getExtraCommands } from "../../ports/commands.port";

const ExtraField = ({ className, playerIndex }) => {
  const commands = getExtraCommands();
  const { colorId, extra } = useStore(
    extraSelectors.makeExtraForPlayer(playerIndex),
  );
  const onChange = (value) => commands.setExtra(playerIndex, value);

  return (
    <PlayerNumberField
      className={className}
      colorId={colorId}
      value={extra}
      onChange={onChange}
      defaultValue={0}
      aria-label="extra points"
    />
  );
};

export default ExtraField;
