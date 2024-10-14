import { Task } from "../interfaces/task";

export const saveTask = (task: Task): void => {
  const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getTasks = (): Task[] => {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
};

export const deleteTask = (id: number): void => {
  let tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const updateTask = (updatedTask: Task): void => {
  let tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks = tasks.map((task) =>
    task.id === updatedTask.id ? updatedTask : task
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
