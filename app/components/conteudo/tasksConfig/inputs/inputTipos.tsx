"use client";
import tiposConfig from "@/app/config/tiposConfig";
import ButtonTipos from "../components/buttonTipos";
import LabelTasks from "../components/labelTasks";
import { useState } from "react";

export default function InputTipos() {
  const [selected, setSelected] = useState("pendente");

  return (
    <div className="grid w-full items-center gap-1.5">
      <LabelTasks text="Status" htmlFor="status" />
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(tiposConfig).map(([key, tipo]) => (
          <ButtonTipos
            key={key}
            selected={selected}
            setSelected={setSelected}
            {...tipo}
          />
        ))}
      </div>
    </div>
  );
}
