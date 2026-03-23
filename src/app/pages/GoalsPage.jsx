import { useDocumentTitle } from "core/hooks";
import { GoalLibrary } from "widgets/goal-library";

const GoalsPage = () => {
  useDocumentTitle("Карты целей | Сумерки");
  return <GoalLibrary />;
};

export { GoalsPage };
