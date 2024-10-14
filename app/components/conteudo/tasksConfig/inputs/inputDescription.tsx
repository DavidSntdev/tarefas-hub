import { Textarea } from "@/components/ui/textarea";
import LabelTasks from "../components/labelTasks";
import { InputTaskProps } from "./inputName";

export default function InputDescription(props: InputTaskProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <LabelTasks text="Description" htmlFor="description" />
      <Textarea
        placeholder="Enter a short description"
        id="message"
        className="border-cinzaEscuro/50 rounded-lg text-lg h-40"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
