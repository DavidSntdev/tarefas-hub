interface TaskButtonProps {
  emoji: string;
  titulo: string;
  descricao?: string;
  tipo: "em-andamento" | "incompleto" | "concluido" | "nenhum";
}

export default function TaskButton(props: TaskButtonProps) {
  let bgCor = "bg-cinza";
  let bgHover = "hover:bg-cinza/70";

  if (props.tipo === "em-andamento") {
    bgCor = "bg-amarelo";
    bgHover = "hover:bg-amarelo/60";
  } else if (props.tipo === "incompleto") {
    bgCor = "bg-vermelhoClaro";
    bgHover = "hover:bg-vermelhoClaro/60";
  } else if (props.tipo === "concluido") {
    bgCor = "bg-verdeClaro";
    bgHover = "hover:bg-verdeClaro/60";
  }

  return (
    <button
      className={`w-full rounded-2xl items-start p-3 ${bgCor} ${bgHover} text-base text-[#030616]  flex flex-col`}
    >
      <div
        className={`flex ${
          props.descricao ? "items-start" : "items-center"
        } gap-4 font-semibold text-xl `}
      >
        <div className="bg-white p-2 rounded-xl hover:bg-white/90">
          <span className="text-lg">{props.emoji}</span>
        </div>
        <div
          className={` ${
            props.descricao ? "py-2 max-w-80" : ""
          } flex flex-col items-start gap-1`}
        >
          {props.titulo}
          {props.descricao && (
            <span className="font-normal text-start text-base">
              {props.descricao}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
