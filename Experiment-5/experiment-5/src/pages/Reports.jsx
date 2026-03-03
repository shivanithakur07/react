import { useSelector } from "react-redux";
import { useMemo, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Reports = () => {
  const tasks = useSelector(state => state.tasks.taskList);
  const { theme } = useContext(AppContext);

  const completionRate = useMemo(() => {
    if (tasks.length === 0) return 0;
    const completed = tasks.filter(t => t.completed).length;
    return ((completed / tasks.length) * 100).toFixed(2);
  }, [tasks]);

  return (
    <div className={theme}>
      <h2>Reports (Experiment 5)</h2>
      <p>Total Tasks: {tasks.length}</p>
      <p>Completion Rate: {completionRate}%</p>
    </div>
  );
};

export default Reports;