import { Label } from "@/components/ui/label";

interface LabelTasksProps {
  text: string;
  htmlFor: string;
}

export default function LabelTasks(props: LabelTasksProps) {
  return (
    <Label htmlFor={props.htmlFor} className="text-cinzaEscuro">
      {props.text}{" "}
    </Label>
  );
}
