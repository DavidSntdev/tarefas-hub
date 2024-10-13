import Image from "next/image";

interface TaskButtonProps {
  emoji: string;
  titulo: string;
  descricao?: string;
  tipo: "pendente" | "incompleto" | "concluido" | "nenhum";
}

export default function TaskButton(props: TaskButtonProps) {
  let bgCor = "bg-cinza";
  let bgHover = "hover:bg-cinza/70";
  let icone = "",
    bgIcone = "",
    hoverIcone = "";

  if (props.tipo === "pendente") {
    bgCor = "bg-amarelo";
    bgHover = "hover:bg-amarelo/60";
    icone = "/icons/iconPendente.svg";
    bgIcone = "bg-laranja";
    hoverIcone = "hover:bg-laranja/60";
  } else if (props.tipo === "incompleto") {
    bgCor = "bg-vermelhoClaro";
    bgHover = "hover:bg-vermelhoClaro/60";
    icone = "/icons/iconIncompleto.svg";
    bgIcone = "bg-vermelho";
    hoverIcone = "hover:bg-vermelho/60";
  } else if (props.tipo === "concluido") {
    bgCor = "bg-verdeClaro";
    bgHover = "hover:bg-verdeClaro/60";
    icone = "/icons/iconConcluido.svg";
    bgIcone = "bg-verde";
    hoverIcone = "hover:bg-verde/60";
  }

  const modoDiv = props.descricao ? "items-start" : "items-center";
  const modoText = props.descricao && "py-2 max-w-80";

  return (
    <button
      className={`w-full rounded-2xl items-start p-3 ${bgCor} ${bgHover} justify-between text-base text-[#030616]  flex`}
    >
      <div className={`flex ${modoDiv} gap-4 font-semibold text-xl `}>
        <div className="bg-white p-2 rounded-xl hover:bg-white/90">
          <span className="text-lg">{props.emoji}</span>
        </div>
        <div className={`${modoText} flex flex-col items-start gap-1`}>
          {props.titulo}
          {props.descricao && (
            <span className="font-normal text-start text-base">
              {props.descricao}
            </span>
          )}
        </div>
      </div>
      {icone && (
        <div className={`${bgIcone} ${hoverIcone} p-2 rounded-xl `}>
          <Image src={icone} alt={props.tipo} width={20} height={20} />
        </div>
      )}
    </button>
  );
}
