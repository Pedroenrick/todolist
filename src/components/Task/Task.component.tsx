import { BiTrash } from "react-icons/bi";
import { TaskProps } from "./Task.types";
import { StyledSpan, TaskContent } from "./Task.styles";
import { useContext } from "react";
import TaskContext from "../../Contexts/TaskContext";

export function Task({ id, title, finished, deleteTask }: TaskProps) {
  const { tasks, setTasks }: any = useContext(TaskContext);

  function handleDeleteTask() {
    deleteTask(id);
  }

  function handleTaskCompleted() {
    const idTask = event.target.value;
    const task = tasks.find((task: TaskProps) => task.id === Number(idTask));

    if (task) {
      task.finished = !task.finished;
      setTasks([...tasks]);
    }
  }

  return (
    <TaskContent>
      <input type="checkbox" value={id} onChange={handleTaskCompleted} />
      {finished ? <StyledSpan>{title}</StyledSpan> : <span>{title}</span>}
      <button onClick={handleDeleteTask}>
        <BiTrash size={24} />
      </button>
    </TaskContent>
  );
}
