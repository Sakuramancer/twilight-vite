import LibraryCardItem from "./LibraryCardItem";
import classes from "./RelicsTable.module.css";

const RelicsTable = ({ relicIds }) => {
  return (
    <div className={classes.main}>
      {relicIds.map((relicId) => (
        <LibraryCardItem key={relicId} relicId={relicId} />
      ))}
    </div>
  );
};

export default RelicsTable;
