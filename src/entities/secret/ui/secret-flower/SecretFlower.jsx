import classNames from "classnames/bind";
import HexedCanvas from "core/canvas/HexedCanvas";
import colors from "core/data/colors.module.css";
import { plusOneVisible } from "core/utils/plusOneVisible";
import SecretHex from "./SecretHex";
import classes from "./SecretFlower.module.css";

const cx = classNames.bind(classes);

const anchorSize = 95;
const delta = 2 * anchorSize;
const centerX = 1.05 * anchorSize;
const centerY = 1.1 * anchorSize;
const geometry = {
  width: 8 * anchorSize,
  height: 2 * centerY,
  anchorSize,
};

const SecretFlower = ({
  playerIndex,
  colorId,
  playerSecrets,
  clickHandler,
}) => {
  const reducedSecrets = plusOneVisible(
    playerSecrets,
    (secret) => secret.taken,
  );

  const mainClass = cx({
    main: true,
    [colors[colorId]]: true,
  });

  return (
    <div className={mainClass}>
      <HexedCanvas className={classes.canvas} geometry={geometry}>
        <HexedCanvas.StripesPattern colorId={colorId} />
        {reducedSecrets.map((secret, secretIndex) => (
          <SecretHex
            key={secretIndex}
            playerIndex={playerIndex}
            secret={secret}
            secretIndex={secretIndex}
            anchorPoint={{ x: centerX + delta * secretIndex, y: centerY }}
            anchorSize={anchorSize}
            onClick={clickHandler}
          />
        ))}
      </HexedCanvas>
    </div>
  );
};

export default SecretFlower;
