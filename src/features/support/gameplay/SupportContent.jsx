import { useState } from "react";
import { PLAYER_COUNT } from "core/config";
import { getSupportCommands } from "entities/support/ports";
import SupportFlower from "./SupportFlower";

const SupportContent = () => {
  const commands = getSupportCommands();
  const [activatedPlayer, setActivatedPlayer] = useState(-1);

  const onSelectSupporter = (supporterIndex) => {
    setActivatedPlayer(
      activatedPlayer === supporterIndex ? -1 : supporterIndex,
    );
  };

  const onSelectReceiver = (receiverIndex) => {
    commands.setSupport(activatedPlayer, receiverIndex);
    setActivatedPlayer(-1);
  };

  return (
    <>
      {Array.from({ length: PLAYER_COUNT }, (_, index) => (
        <SupportFlower
          key={index}
          playerIndex={index}
          activatedPlayer={activatedPlayer}
          onSelectSupporter={onSelectSupporter}
          onSelectReceiver={onSelectReceiver}
        />
      ))}
    </>
  );
};

export { SupportContent };
