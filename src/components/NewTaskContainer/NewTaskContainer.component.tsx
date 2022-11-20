import { useContext, useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import {
  Container,
  NewTaskButton,
  StyledInput,
} from "./NewTaskContainer.styles";
import TaskContext from "../../Contexts/TaskContext";

export function NewTaskContainer() {
  const {tasks, setTasks}: any = useContext(TaskContext);

  const [newTaskText, setNewTaskText] = useState("");

  function handleNewTaskTextChange() {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid() {
    event.target.setCustomValidity("Task cannot be empty");
  }

  function handleCreateTask() {
    event?.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      title: newTaskText,
      finished: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <Container onSubmit={handleCreateTask}>
      <StyledInput
        placeholder="Add new task"
        type="text"
        name="newTask"
        onChange={handleNewTaskTextChange}
        value={newTaskText}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <NewTaskButton type="submit" disabled={isNewTaskEmpty}>
        Create <BiPlusCircle />
      </NewTaskButton>
    </Container>
  );
}
