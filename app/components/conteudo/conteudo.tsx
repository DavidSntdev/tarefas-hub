"use client";
import { useEffect, useState } from "react";
import ConteudoLayout from "../layouts/conteudoLayout";
import Header from "./header/header";
import AddNewTask from "./tasksContent/buttonstask/addnewtask";
import Tasks from "./tasksContent/tasks";
import TasksConfig from "./tasksConfig/tasksConfig";
import { Task } from "@/app/interfaces/task";
import {
  getTasks,
  saveTask,
  deleteTask,
  updateTask,
} from "@/app/utils/tasksLocalStorage";
import { tasksMap } from "@/app/config/tasks";
import { motion, AnimatePresence } from "framer-motion";
export default function Conteudo() {
  const [taskConfig, setTaskConfig] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(Object.values(tasksMap));
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    const storedTasks = getTasks();
    if (storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

  const addNewTask = (newTask: Task) => {
    saveTask(newTask);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleUpdateTask = (updatedTask: Task) => {
    updateTask(updatedTask);
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
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
        <AddNewTask
          onClick={() => {
            setSelectedTask(null);
            setTaskConfig(true);
          }}
        />
      </div>
      <AnimatePresence>
        {taskConfig && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TasksConfig
              cancelar={() => setTaskConfig(false)}
              addNewTask={addNewTask}
              updateTask={handleUpdateTask}
              onDeleteTask={handleDeleteTask}
              selectedTask={selectedTask}
              tasks={tasks}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </ConteudoLayout>
  );
}
