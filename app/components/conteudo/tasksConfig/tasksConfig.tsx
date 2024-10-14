"use client";
import { useState, useEffect } from "react";
import InputIcons from "./inputs/inputIcons";
import HeaderTasks from "./header/headerTasks";
import InputName from "./inputs/inputName";
import InputDescription from "./inputs/inputDescription";
import FooterTasks from "./footer/footerTasks";
import InputTipos from "./inputs/inputTipos";
import { Task } from "@/app/interfaces/task";

interface TasksConfigProps {
  cancelar: () => void;
  addNewTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
  selectedTask: Task | null;
  tasks: Task[];
}

export default function TasksConfig(props: TasksConfigProps) {
  const [newTask, setNewTask] = useState<Task>({
    id: props.selectedTask ? props.selectedTask.id : props.tasks.length + 1,
    titulo: props.selectedTask?.titulo || "",
    description: props.selectedTask?.description || "",
    emoji: props.selectedTask?.emoji || "",
    tipo: props.selectedTask?.tipo || "nenhum",
  });

  useEffect(() => {
    if (props.selectedTask) {
      setNewTask(props.selectedTask);
    } else {
      setNewTask({
        id: props.tasks.length + 1,
        titulo: "",
        description: "",
        emoji: "",
        tipo: "nenhum",
      });
    }
  }, [props.selectedTask, props.tasks.length]);

  const handleSaveTask = () => {
    if (newTask.titulo && newTask.emoji) {
      const taskToSave = { ...newTask };

      if (props.selectedTask) {
        console.log("Updating task:", taskToSave);
        props.updateTask(taskToSave); 
      } else {
        console.log("Adding new task:", taskToSave);
        props.addNewTask(taskToSave);
      }
      props.cancelar();
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  };

  const handleDeleteTask = () => {
    if (props.selectedTask) {
      props.onDeleteTask(props.selectedTask.id);
      props.cancelar();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-pretoTransparente p-5">
      <div className="w-full h-full bg-white rounded-xl p-5 flex flex-col justify-between">
        <div className="flex flex-col w-full gap-5">
          <HeaderTasks cancelar={props.cancelar} />
          <InputName
            value={newTask.titulo}
            onChange={(titulo) => setNewTask({ ...newTask, titulo })}
          />
          <InputDescription
            value={newTask.description}
            onChange={(description) => setNewTask({ ...newTask, description })}
          />
          <InputIcons
            value={newTask.emoji}
            onChange={(emoji) => setNewTask({ ...newTask, emoji })}
          />
          <InputTipos
            tipo={newTask.tipo}
            onChange={(tipo) => setNewTask({ ...newTask, tipo })}
          />
        </div>
        <FooterTasks onSave={handleSaveTask} onDelete={handleDeleteTask} />
      </div>
    </div>
  );
}
