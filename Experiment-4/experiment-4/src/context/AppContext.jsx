import { createContext, useReducer, useMemo } from "react";
import appReducer from "../reducer/appReducer";

export const AppContext = createContext();

const initialState = {
  theme: "light",
  tasks: []
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const completedTasks = useMemo(() => {
    return state.tasks.filter(task => task.completed).length;
  }, [state.tasks]);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <AppContext.Provider
      value={{
        theme: state.theme,
        tasks: state.tasks,
        dispatch,
        toggleTheme,
        completedTasks
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
