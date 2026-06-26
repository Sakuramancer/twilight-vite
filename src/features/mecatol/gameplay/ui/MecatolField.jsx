import { useStore } from "shared/store";
import { PlayerNumberField } from "shared/ui";
import { getMecatolCommands } from "entities/mecatol";
import { selectors } from "../model/selectors";

const MecatolField = ({ className, playerIndex }) => {
  const commands = getMecatolCommands();
  const { colorId, mecatol } = useStore(
    selectors.makeMecatolForPlayer(playerIndex),
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
