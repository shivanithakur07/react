import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/slices/taskSlice";

const CardComponent = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h4>{task.title}</h4>
      <p>Status: {task.completed ? "Completed ✅" : "Pending ⏳"}</p>

      <button
        style={{ background: "#4e73df", color: "white" }}
        onClick={() => dispatch(toggleTask(task.id))}
      >
        Toggle
      </button>

      <button
        style={{ background: "#e74a3b", color: "white" }}
        onClick={() => dispatch(deleteTask(task.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default CardComponent;