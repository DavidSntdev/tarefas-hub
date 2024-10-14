"use client";
import { useState } from "react";
import ConteudoLayout from "../layouts/conteudoLayout";
import Header from "./header/header";
import AddNewTask from "./tasksContent/buttonstask/addnewtask";
import Tasks from "./tasksContent/tasks";
import TasksConfig from "./tasksConfig/tasksConfig";

export default function Conteudo() {
  const [TaskConfig, setTaskConfig] = useState(false);

  return (
    <ConteudoLayout className="px-5 py-10 sm:p-10 flex flex-col items-center sm:items-start gap-8">
      <Header />
      <div className="flex flex-col w-full items-center gap-5">
        <Tasks onClick={() => setTaskConfig(true)} />
        <AddNewTask onClick={() => setTaskConfig(true)} />
      </div>
      {TaskConfig && <TasksConfig cancelar={() => setTaskConfig(false)} />}
    </ConteudoLayout>
  );
}
