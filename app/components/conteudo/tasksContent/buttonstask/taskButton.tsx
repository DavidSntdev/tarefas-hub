interface TaskButtonProps {
  emoji: string;
  titulo: string;
  descricao?: string;
  color: string;
}

export default function TaskButton(props: TaskButtonProps) {
  return (
    <button
      className={`w-full rounded-2xl items-start p-3 ${props.color} text-base text-[#030616] hover:bg-black/20 flex flex-col`}
    >
      <div
        className={`flex ${
          props.descricao ? "items-start" : "items-center"
        } gap-4 font-semibold text-xl`}
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
