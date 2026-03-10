import { useDocumentTitle } from "core/hooks/useDocumentTitle";
import { GoalLibrary } from "features/goal/goal-library";

const GoalsPage = () => {
  useDocumentTitle("Карты целей | Сумерки");
  return <GoalLibrary />;
};

export default GoalsPage;
