import { useState } from "react";
import { IncentiveFlower } from "features/incentive/gameplay";
import { SelectIncentivePanel } from "features/incentive/selectIncentive";
import { getIncentiveCommands } from "entities/incentive";

const IncentiveGain = ({ className }) => {
  const [showSelectIncentivePanel, setShowSelectIncentivePanel] =
    useState(false);
  const commands = getIncentiveCommands();

  const onSelectCard = () => setShowSelectIncentivePanel(true);
  const onDiscard = () => setShowSelectIncentivePanel(false);

  const onConfirm = (cardId) => {
    commands.setIncentive(cardId);
    setShowSelectIncentivePanel(false);
  };

  return (
    <div className={className}>
      <IncentiveFlower onSelectCard={onSelectCard} />
      {showSelectIncentivePanel && (
        <SelectIncentivePanel onDiscard={onDiscard} onConfirm={onConfirm} />
      )}
    </div>
  );
};

export { IncentiveGain };
