"use client";
import { useEffect, useState } from "react";
import ConteudoLayout from "../layouts/conteudoLayout";
import Header from "./header/header";
import AddNewTask from "./tasksContent/buttonstask/addnewtask";
import Tasks from "./tasksContent/tasks";
import TasksConfig from "./tasksConfig/tasksConfig";
import { Task } from "@/app/interfaces/task";
import { getTasks, saveTask, deleteTask } from "@/app/utils/tasksLocalStorage";

export default function Conteudo() {
  const [taskConfig, setTaskConfig] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    const storedTasks = getTasks();
    setTasks(storedTasks);
  }, []);

  const addNewTask = (newTask: Task) => {
    saveTask(newTask);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <ConteudoLayout className="px-5 py-10 sm:p-10 flex flex-col items-center sm:items-start gap-8">
      <Header />
      <div className="flex flex-col w-full items-center gap-5">
        <Tasks
          tasks={tasks}
          onClick={(task) => {
            setSelectedTask(task);
            setTaskConfig(true);
          }}
        />
        <AddNewTask onClick={() => setTaskConfig(true)} />
      </div>
      {taskConfig && (
        <TasksConfig
          cancelar={() => setTaskConfig(false)}
          addNewTask={addNewTask}
          onDeleteTask={handleDeleteTask}
          selectedTask={selectedTask}
        />
      )}
    </ConteudoLayout>
  );
}
