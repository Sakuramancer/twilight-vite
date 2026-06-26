import { useStore } from "shared/store";
import { PlayerNumberField } from "shared/ui";
import { getExtraCommands } from "entities/extra";
import { selectors } from "../model/selectors";

const ExtraField = ({ className, playerIndex }) => {
  const commands = getExtraCommands();
  const { colorId, extra } = useStore(
    selectors.makeExtraForPlayer(playerIndex),
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
