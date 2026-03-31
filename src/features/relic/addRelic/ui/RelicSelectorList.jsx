import { RelicSelectorItem } from "./RelicSelectorItem";

const RelicSelectorList = ({
  className,
  relicIds,
  excludedRelics,
  toggleAvailableForRandom,
  setRelicSelected,
}) => {
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
