import {
  Card,
  CardHeader,
  CardBody,
  ContentEmpty,
  TextContainer,
} from "./Content.styles";
import clipboard from "../../assets/Clipboard.png";
import { Task } from "../Task/Task.component";
import { useContext } from "react";
import TaskContext from "../../Contexts/TaskContext";
import { TaskProps } from "../Task/Task.types";

export function Content() {
  const { tasks, setTasks }: any = useContext(TaskContext);

  function deleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter(
      (task: TaskProps) => task.id !== id
    );
    setTasks([...tasksWithoutDeletedOne]);
  }

  const tasksFinished = tasks.filter((task: TaskProps) => task.finished);

  return (
    <Card>
      <CardHeader>
        <p>
          Tasks created <span>{tasks.length}</span>
        </p>
        <p>
          Finished{" "}
          <span>
            {tasksFinished.length} of {tasks.length}
          </span>
        </p>
      </CardHeader>
      <CardBody>
        {tasks ? (
          tasks.map((task: TaskProps) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              finished={task.finished}
              deleteTask={deleteTask}
            />
          ))
        ) : (
          <ContentEmpty>
            <div>
              <img src={clipboard} alt="clipboard" />
            </div>

            <TextContainer>
              <span>you not have tasks created</span>
              <span>create tasks and plan your to do list</span>
            </TextContainer>
          </ContentEmpty>
        )}
      </CardBody>
    </Card>
  );
}
