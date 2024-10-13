import { tasks } from "@/app/config/tasks";
import TaskButton from "./buttonstask/taskButton";

export default function Tasks() {
  return Object.entries(tasks).map(([key, task]) => (
    <TaskButton
      key={key}
      tipo={task.tipo}
      titulo={task.title}
      emoji={task.emoji}
      descricao={task.description}
    />
  ));
}
