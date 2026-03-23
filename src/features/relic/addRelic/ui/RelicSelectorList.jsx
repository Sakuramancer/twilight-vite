import { useStore } from "core/store";
import { relicSelectors } from "entities/relic/model";
import { RelicSelectorItem } from "./RelicSelectorItem";

const RelicSelectorList = ({
  className,
  excludedRelics,
  toggleAvailableForRandom,
  setRelicSelected,
}) => {
  const relicIds = useStore(relicSelectors.selectIdsInactive);

  return (
    <div className={className}>
      {relicIds.map((relicId) => (
        <RelicSelectorItem
          key={relicId}
          relicId={relicId}
          availableForRandom={!excludedRelics.has(relicId)}
          toggleAvailableForRandom={toggleAvailableForRandom}
          setRelicSelected={setRelicSelected}
        />
      ))}
    </div>
  );
};

export default RelicSelectorList;
