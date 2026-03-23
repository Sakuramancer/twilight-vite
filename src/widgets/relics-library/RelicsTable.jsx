import { relicSelectors } from "entities/relic/model";
import LibraryCardItem from "./LibraryCardItem";
import classes from "./RelicsTable.module.css";

const RelicsTable = ({ filters }) => {
  const relicIds = relicSelectors.allSortedIdsWithFilters(filters);

  return (
    <div className={classes.main}>
      {relicIds.map((relicId) => (
        <LibraryCardItem key={relicId} relicId={relicId} />
      ))}
    </div>
  );
};

export default RelicsTable;
