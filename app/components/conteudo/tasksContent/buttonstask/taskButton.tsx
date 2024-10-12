import { Button } from "@/components/ui/button";

interface TaskButtonProps {
  emoji: string;
  titulo: string;
  descricao?: string;
  color: string;
}

export default function TaskButton(props: TaskButtonProps) {
  return (
    <Button
      className={`w-full rounded-xl items-center justify-start py-10 bg-[${props.color}] text-base text-[#030616] font-semibold hover:bg-[${props.color}]/70 flex gap-4`}
    >
      <div className="bg-cinza p-3 rounded-xl hover:bg-cinza/70">
        <span className="text-xl">{props.emoji}</span>
      </div>
      {props.titulo}
    </Button>
  );
}
