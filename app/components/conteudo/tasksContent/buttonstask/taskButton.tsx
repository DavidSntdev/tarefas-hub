import Image from "next/image";
import { Button } from "@/components/ui/button";
import { verTipo } from "@/app/utils/verTipo";
import { corHover } from "@/app/utils/corHover";

interface TaskButtonProps {
  emoji: string;
  titulo: string;
  descricao?: string;
  tipo: "pendente" | "incompleto" | "concluido" | "nenhum";
  onClick: () => void;
}

export default function TaskButton(props: TaskButtonProps) {
  const { bgCor, icone, bgIcone } = verTipo(props.tipo);

  const bgHover = corHover(bgCor);
  const hoverIcone = corHover(bgIcone);

  const modoDiv = props.descricao ? "items-start" : "items-center";
  const modoText = props.descricao && "py-2 max-w-80 break-words";

  return (
    <Button
      className={`w-full rounded-2xl h-auto items-start p-4 ${bgCor} ${bgHover} justify-between text-base text-[#030616] flex items-center`}
      onClick={props.onClick}
    >
      <div
        className={`flex ${modoDiv} gap-4 font-semibold text-lg sm:text-xl `}
      >
        <div className="bg-white p-2 rounded-xl hover:bg-white/90">
          <span className="text-lg">{props.emoji}</span>
        </div>
        <div className={`${modoText} flex flex-col items-start gap-1`}>
          {props.titulo}
          {props.descricao && (
            <span className="font-normal text-start text-sm sm:text-base">
              {props.descricao}
            </span>
          )}
        </div>
      </div>
      {icone && (
        <div className={`${bgIcone} ${hoverIcone} p-3 rounded-xl `}>
          <Image src={icone} alt={props.tipo} width={20} height={20} />
        </div>
      )}
    </Button>
  );
}
