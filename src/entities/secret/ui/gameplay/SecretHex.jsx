import classNames from "classnames/bind";
import { HexedCanvas } from "core/canvas";
import { getSecretCommands } from "../../ports/commands.port";
import classes from "./SecretHex.module.css";

const cx = classNames.bind(classes);

const SecretHex = ({
  playerIndex,
  secretIndex,
  secret,
  anchorPoint,
  anchorSize,
  onClick,
}) => {
  const commands = getSecretCommands();
  const taken = secret.taken;
  const checked = taken && secret.cardId;
  const clickHandler = taken
    ? checked
      ? () => commands.resetSecret(playerIndex, secretIndex)
      : () => onClick(playerIndex, secretIndex)
    : () => commands.preselectSecretForPlayer(playerIndex, secretIndex);

  const hexClass = cx({
    hex: true,
    taken: taken && !checked,
    checked: taken && checked,
    new: !taken,
  });

  return (
    <g>
      {!taken && (
        <HexedCanvas.Hex
          className={classes.mount}
          anchorPoint={anchorPoint}
          anchorSize={anchorSize}
          sitOnEdge={false}
        />
      )}
      <HexedCanvas.Hex
        className={hexClass}
        anchorPoint={anchorPoint}
        anchorSize={anchorSize}
        sitOnEdge={false}
        onClick={clickHandler}
      />
      {!taken && (
        <HexedCanvas.Plus
          className={classes.plus}
          anchorPoint={anchorPoint}
          anchorSize={anchorSize}
        />
      )}
      {checked && (
        <HexedCanvas.Check
          className={classes.check}
          anchorPoint={anchorPoint}
          anchorSize={anchorSize}
        />
      )}
    </g>
  );
};

export default SecretHex;
