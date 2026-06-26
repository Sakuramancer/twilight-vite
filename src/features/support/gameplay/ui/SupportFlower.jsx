import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { useStore } from "shared/store";
import { HexedCanvas } from "shared/ui";
import { getSupportCommands } from "entities/support";
import { selectors } from "../model/selectors";
import SupporterHex from "./SupporterHex";
import ReceivedHex from "./ReceivedHex";
import { geometry } from "./SupportFlower.geometry";
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
    selectors.makeSupporters(playerIndex),
  );

  const isSupportUsed = receiverIndex > -1;
  const isActivated = activatedPlayer === playerIndex;
  const isAnotherActivated = !isActivated && activatedPlayer > -1;

  const leafClickHandler = () => onSelectReceiver(playerIndex);

  const supporterHexClickHandler = isSupportUsed
    ? () => commands.resetSupportOfPlayer(playerIndex)
    : () => onSelectSupporter(playerIndex);

  const receiverHexClickHandler = (supporterIndex) => () => {
    commands.resetSupportOfPlayer(supporterIndex);
  };

  const mainClass = cx({
    main: true,
    [colorClasses[colorId]]: true,
  });

  return (
    <div className={mainClass}>
      <HexedCanvas className={classes.canvas} geometry={geometry.hexBase}>
        <HexedCanvas.StripesPattern colorId={colorId} />
        {!isAnotherActivated && (
          <SupporterHex
            anchorPoint={geometry.supporterCenter}
            isSupportUsed={isSupportUsed}
            isActivated={isActivated}
            isAnotherActivated={isAnotherActivated}
            onClick={supporterHexClickHandler}
          />
        )}
        {isAnotherActivated && (
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
            anchorPoint={{
              x: geometry.centerX + index * geometry.delta,
              y: geometry.centerY,
            }}
            anchorSize={geometry.anchorSize}
            colorId={colorId}
            onClick={receiverHexClickHandler(supporterIndex)}
          />
        ))}
      </HexedCanvas>
    </div>
  );
};

export default SupportFlower;
