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
  const [erro, setErro] = useState("");
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
    if (!newTask.titulo || !newTask.emoji) {
      const errors = [];
      if (!newTask.titulo) errors.push("campo de título");
      if (!newTask.emoji) errors.push("campo de emoji");
      setErro(`Por favor, preencha o(s) ${errors.join(" e ")}.`);
      return;
    }

    const taskToSave = { ...newTask };

    if (props.selectedTask) {
      props.updateTask(taskToSave);
    } else {
      props.addNewTask(taskToSave);
    }

    props.cancelar();
    setErro("");
  };

  const handleDeleteTask = () => {
    if (props.selectedTask) {
      props.onDeleteTask(props.selectedTask.id);
      props.cancelar();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-pretoTransparente p-5">
      <div className="max-w-4xl h-full bg-white rounded-xl p-5 flex flex-col justify-between ml-auto">
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
          {erro && <p className="text-red-500">{erro}</p>}
        </div>
        <FooterTasks onSave={handleSaveTask} onDelete={handleDeleteTask} />
      </div>
    </div>
  );
}
