import { useStore } from "shared/store";
import { HexedCanvas, HexLayout } from "shared/ui";
import { factionsMeta } from "../model/data";
import { playerSelectors } from "../model/selectors";
import { getPlayerCommands } from "../ports";
import { PlayerBadge } from "./PlayerBadge";

const PointCounterItem = ({ position }) => {
  const commands = getPlayerCommands();
  const { colorId, factionId, score } = useStore(
    playerSelectors.makeScoreForPlayer(position),
  );

  const isSwitchable = factionsMeta[factionId].switchTo;
  const switchHandler = isSwitchable
    ? () => commands.switchFaction(position)
    : undefined;

  return (
    <PlayerBadge
      colorId={colorId}
      factionId={factionId}
      value={score}
      isSwitchable={isSwitchable}
      onSwitch={switchHandler}
    />
  );
};

export { PointCounterItem };
