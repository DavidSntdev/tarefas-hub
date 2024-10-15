import { Textarea } from "@/components/ui/textarea";
import LabelTasks from "../components/labelTasks";
import { InputTaskProps } from "./inputName";
import { inputConfig } from "@/app/config/inputConfig";

export default function InputDescription(props: InputTaskProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <LabelTasks
        text={inputConfig.inputDescription.label}
        htmlFor="description"
      />
      <Textarea
        placeholder={inputConfig.inputDescription.placeholder}
        id="message"
        className="border-cinzaEscuro/50 rounded-lg text-lg h-40"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
