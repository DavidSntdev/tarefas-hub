import { Input } from "@/components/ui/input";
import LabelTasks from "../components/labelTasks";
import { inputConfig } from "@/app/config/inputConfig";

export interface InputTaskProps {
  value: string;
  onChange: (name: string) => void;
}

export default function InputName(props: InputTaskProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <LabelTasks text={inputConfig.inputName.label} htmlFor="name" />
      <Input
        type="text"
        id="name"
        placeholder={inputConfig.inputName.placeholder}
        className="border-cinzaEscuro/50 h-10 p-4 text-lg rounded-lg"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
