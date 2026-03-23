import { useStore } from "core/store";
import { PlayerNumberField } from "core/ui";
import { mecatolSelectors } from "../../model/selectors";
import { getMecatolCommands } from "../../ports/commands.port";

const MecatolField = ({ className, playerIndex }) => {
  const commands = getMecatolCommands();
  const { colorId, mecatol } = useStore(
    mecatolSelectors.makeMecatolForPlayer(playerIndex),
  );
  const onChange = (value) => commands.setMecatol(playerIndex, value);

  return (
    <PlayerNumberField
      className={className}
      colorId={colorId}
      value={mecatol}
      onChange={onChange}
      defaultValue={0}
      aria-label="mecatol points"
    />
  );
};

export default MecatolField;
