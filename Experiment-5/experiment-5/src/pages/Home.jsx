import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleTask, deleteTask } from "../redux/slices/taskSlice";
import { useState } from "react";

const Home = () => {
  const tasks = useSelector(state => state.tasks.taskList);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput("");
    }
  };

  return (
    <div className="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>Building modern web applications using React.</p>

      <div style={{ marginBottom: "20px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* TASK LIST */}
      <div style={{ width: "450px" }}>
        {tasks.map(task => (
          <div
            key={task.id}
            style={{
              background: "#ffffff",
              padding: "12px 15px",
              marginBottom: "12px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <span style={{ fontSize: "16px" }}>
                {task.title}
              </span>

              <div style={{ marginTop: "5px" }}>
                {task.completed ? (
                  <span
                    style={{
                      backgroundColor: "#28a745",
                      color: "white",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      fontSize: "12px"
                    }}
                  >
                    Completed
                  </span>
                ) : (
                  <span
                    style={{
                      backgroundColor: "#ffc107",
                      color: "black",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      fontSize: "12px"
                    }}
                  >
                    Pending
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                style={{ background: "#444", marginRight: "6px" }}
                onClick={() => dispatch(toggleTask(task.id))}
              >
                Toggle
              </button>

              <button
                style={{ background: "#d9534f" }}
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;