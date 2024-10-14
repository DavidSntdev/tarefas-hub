import { Input } from "@/components/ui/input";
import LabelTasks from "../components/labelTasks";

export default function InputName() {
  return (
    <div className="grid w-full items-center gap-1.5">
      <LabelTasks text="Task name" htmlFor="name" />
      <Input
        type="text"
        id="name"
        placeholder="Enter task name"
        className="border-cinzaEscuro/50 h-10 p-4 text-lg rounded-lg"
      />
    </div>
  );
}
