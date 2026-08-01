import { useState } from "react";
import { LeakFlower } from "features/leak/gameplay";
import { SelectLeakPanel } from "features/leak/selectLeak";

const LeakGain = ({ className }) => {
  const [showSelectLeakPanel, setShowSelectLeakPanel] = useState(false);

  const onSelectCard = () => setShowSelectLeakPanel(true);
  const onDiscard = () => setShowSelectLeakPanel(false);

  return (
    <div className={className}>
      <LeakFlower onSelectCard={onSelectCard} />
      {showSelectLeakPanel && <SelectLeakPanel onDiscard={onDiscard} />}
    </div>
  );
};

export { LeakGain };
