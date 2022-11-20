import { useState } from "react";
import { Content } from "./components/Content/Content.component";
import { Header } from "./components/Header/Header.component";
import TaskContext from "./Contexts/TaskContext";
import { NewTaskContainer } from "./components/NewTaskContainer/NewTaskContainer.component";

export function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <main className="App">
        <Header />
        <NewTaskContainer />
        <Content />
      </main>
    </TaskContext.Provider>
  );
}
