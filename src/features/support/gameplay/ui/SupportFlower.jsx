import classNames from "classnames/bind";
import { HexedCanvas } from "core/canvas";
import { useStore } from "core/store";
import { supportSelectors } from "entities/support/model";
import { getSupportCommands } from "entities/support/ports";
import SupporterHex from "./SupporterHex";
import ReceivedHex from "./ReceivedHex";
import { geometry } from "./SupportFlower.geometry";
import colors from "core/data/colors.module.css";
import classes from "./SupportFlower.module.css";

const cx = classNames.bind(classes);

const SupportFlower = ({
  playerIndex,
  activatedPlayer,
  onSelectSupporter,
  onSelectReceiver,
}) => {
  const commands = getSupportCommands();
  const { colorId, receiverIndex, supporters } = useStore(
    supportSelectors.makeSupportersOfColoredPlayer(playerIndex),
  );

  const isSupportUsed = receiverIndex > -1;
  const isActivated = activatedPlayer === playerIndex;
  const isAnotherActivated = !isActivated && activatedPlayer > -1;
  const selectors = { isSupportUsed, isActivated, isAnotherActivated };

  const leafClickHandler = () => onSelectReceiver(playerIndex);

  const supporterHexClickHandler = isSupportUsed
    ? () => commands.resetSupportOfPlayer(playerIndex)
    : () => onSelectSupporter(playerIndex);

  const receiverHexClickHandler = (supporterIndex) => () => {
    commands.resetSupportOfPlayer(supporterIndex);
  };

  const mainClass = cx({
    main: true,
    [colors[colorId]]: true,
  });

  return (
    <div className={mainClass}>
      <HexedCanvas className={classes.canvas} geometry={geometry.hexBase}>
        <HexedCanvas.StripesPattern colorId={colorId} />
        <SupporterHex
          selectors={selectors}
          onClick={supporterHexClickHandler}
          anchorPoint={geometry.supporterCenter}
        />
        {activatedPlayer > -1 && activatedPlayer !== playerIndex && (
          <HexedCanvas.Leaf
            className={classes.leaf}
            anchorPoint={geometry.leafCenter}
            anchorSize={100}
            onClick={leafClickHandler}
          />
        )}
        {supporters.map(({ colorId, supporterIndex }, index) => (
          <ReceivedHex
            key={index}
            colorId={colorId}
            onClick={receiverHexClickHandler(supporterIndex)}
            anchorPoint={{
              x: geometry.centerX + index * geometry.delta,
              y: geometry.centerY,
            }}
            anchorSize={geometry.anchorSize}
          />
        ))}
      </HexedCanvas>
    </div>
  );
};

export default SupportFlower;
