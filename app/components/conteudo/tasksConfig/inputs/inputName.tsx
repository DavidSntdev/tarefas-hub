import { Input } from "@/components/ui/input";
import LabelTasks from "../components/labelTasks";

export interface InputTaskProps {
  value: string;
  onChange: (name: string) => void;
}

export default function InputName(props: InputTaskProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <LabelTasks text="Task name" htmlFor="name" />
      <Input
        type="text"
        id="name"
        placeholder="Enter task name"
        className="border-cinzaEscuro/50 h-10 p-4 text-lg rounded-lg"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
