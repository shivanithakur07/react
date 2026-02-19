import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function Analytics() {
  const { tasks, dispatch, completedTasks } = useContext(AppContext);
  const [input, setInput] = useState("");

  const styles = {
    container: { padding: "40px" },
    card: {
      backgroundColor: "#f4f4f4",
      padding: "15px",
      marginBottom: "10px",
      borderRadius: "8px"
    }
  };

  const handleAdd = () => {
    if (!input.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        title: input,
        completed: false
      }
    });

    setInput("");
  };

  return (
    <div style={styles.container}>
      <h1>Project Analytics</h1>

      <input
        type="text"
        placeholder="Add task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <h3>Total Tasks: {tasks.length}</h3>
      <h3>Completed Tasks: {completedTasks}</h3>

      {tasks.map(task => (
        <div key={task.id} style={styles.card}>
          <span
            onClick={() =>
              dispatch({ type: "TOGGLE_TASK", payload: task.id })
            }
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {task.title}
          </span>

          <button
            onClick={() =>
              dispatch({ type: "DELETE_TASK", payload: task.id })
            }
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Analytics;
