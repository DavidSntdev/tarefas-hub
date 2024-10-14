import { corHover } from "@/app/utils/corHover";
import { Button } from "@/components/ui/button";

interface IconsOptionsProps {
  setSelectedOption: (option: string) => void;
  selectedOption: string;
  emoji: string;
  id: string;
}

export default function IconsOptions(props: IconsOptionsProps) {
  const bgColor = props.selectedOption === props.id ? "bg-amarelo" : "bg-cinza";
  const bgHover = corHover(bgColor);

  return (
    <Button
      onClick={() => props.setSelectedOption(props.id)}
      className={`px-2 py-6 rounded-xl text-2xl flex items-center justify-center transition-colors ${bgColor} ${bgHover}`}
    >
      {props.emoji}
    </Button>
  );
}
