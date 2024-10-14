import TaskButton from "./buttonstask/taskButton";
import { Task } from "@/app/interfaces/task";

interface TasksProps {
  onClick: (task: Task) => void;
  tasks: Task[];
}

export default function Tasks(props: TasksProps) {
  return props.tasks.map((task) => (
    <TaskButton
      key={task.id}
      tipo={task.tipo}
      titulo={task.titulo}
      emoji={task.emoji}
      descricao={task.description}
      onClick={() => props.onClick(task)}
    />
  ));
}
