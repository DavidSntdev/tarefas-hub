import tiposConfig from "@/app/config/tiposConfig";
import ButtonTipos from "../components/buttonTipos";
import LabelTasks from "../components/labelTasks";
import { inputConfig } from "@/app/config/inputConfig";

interface InputTiposProps {
  tipo: "pendente" | "incompleto" | "concluido" | "nenhum";
  onChange: (value: "pendente" | "incompleto" | "concluido" | "nenhum") => void;
}

export default function InputTipos(props: InputTiposProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <LabelTasks text={inputConfig.inputTipos.label} htmlFor="status" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {Object.entries(tiposConfig).map(([key, config]) => (
          <ButtonTipos
            key={key}
            selected={props.tipo}
            setSelected={props.onChange}
            tipo={
              config.tipo as "pendente" | "incompleto" | "concluido" | "nenhum"
            }
            text={config.text}
          />
        ))}
      </div>
    </div>
  );
}
