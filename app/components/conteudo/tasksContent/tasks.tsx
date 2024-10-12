import { tasks } from "@/app/config/tasks";
import TaskButton from "./buttonstask/taskButton";

export default function Tasks() {
  return Object.entries(tasks).map(([key, task]) => (
    <TaskButton key={key} color={task.color} titulo={task.title} emoji="☕" />
  ));
}
