import { tasks } from "@/app/config/tasks";
import TaskButton from "./buttonstask/taskButton";

interface TasksProps {
  onClick: () => void;
}

export default function Tasks(props: TasksProps) {
  return Object.entries(tasks).map(([key, task]) => (
    <TaskButton
      key={key}
      tipo={task.tipo}
      titulo={task.title}
      emoji={task.emoji}
      descricao={task.description}
      onClick={() => props.onClick()}
    />
  ));
}
