import tiposConfig from "@/app/config/tiposConfig";
import ButtonTipos from "../components/buttonTipos";
import LabelTasks from "../components/labelTasks";

interface InputTiposProps {
  tipo: "pendente" | "incompleto" | "concluido" | "nenhum";
  onChange: (value: "pendente" | "incompleto" | "concluido" | "nenhum") => void;
}

export default function InputTipos(props: InputTiposProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <LabelTasks text="Status" htmlFor="status" />
      <div className="grid grid-cols-2 gap-2">
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
