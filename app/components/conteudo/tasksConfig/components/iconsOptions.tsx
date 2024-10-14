import { Button } from "@/components/ui/button";

interface IconsOptionsProps {
  setSelectedOption: (option: string) => void;
  selectedOption: string;
  text: string;
  id: string;
}

export default function IconsOptions(props: IconsOptionsProps) {
  const bgColor = props.selectedOption === props.id ? "bg-amarelo" : "bg-cinza";

  return (
    <Button
      onClick={() => props.setSelectedOption(props.id)}
      className={`px-2 py-6 rounded-xl text-2xl flex items-center justify-center transition-colors ${bgColor}`}
    >
      {props.text}
    </Button>
  );
}
