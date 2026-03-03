import { useSelector } from "react-redux";
import { useMemo } from "react";

const Analytics = () => {
  const tasks = useSelector(state => state.tasks.taskList);

  const summary = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [tasks]);

  return (
    <div>
      <h2>Analytics</h2>
      <p>Total: {summary.total}</p>
      <p>Completed: {summary.completed}</p>
      <p>Pending: {summary.pending}</p>
    </div>
  );
};

export default Analytics;