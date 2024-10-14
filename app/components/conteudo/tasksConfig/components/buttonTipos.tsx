import { corHover } from "@/app/utils/corHover";
import { verTipo } from "@/app/utils/verTipo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ButtonTiposProps {
  tipo: string;
  text: string;
  selected: string;
  setSelected: (value: string) => void;
}

export default function ButtonTipos(props: ButtonTiposProps) {
  const { icone, bgIcone } = verTipo(props.tipo);
  const hover = corHover(bgIcone);
  const selecionado = props.selected === props.tipo;
  const border = selecionado
    ? "border-2 border-azul"
    : "border-[1px] border-cinzaEscuro/50";

  return (
    <Button
      className={`${border} w-full rounded-2xl p-1 pr-4 h-14 justify-between bg-white hover:bg-pretoTransparente  text-base flex items-center`}
      onClick={() => props.setSelected(props.tipo)}
    >
      <div
        className={`flex gap-4 h-full sm:text-xl  items-center text-black font-normal`}
      >
        <div
          className={`p-3 ${bgIcone} ${hover} h-full flex items-center rounded-xl `}
        >
          <Image src={icone} alt={props.text} width={20} height={20} />
        </div>
        <span className="text-base font-medium">{props.text}</span>
      </div>
      {selecionado && (
        <div className="bg-azul p-1 rounded-full hover:bg-azul/90">
          <span>
            <Image
              src={"/icons/iconDone.svg"}
              alt={"Icon Selecionado"}
              width={15}
              height={15}
            />
          </span>
        </div>
      )}
    </Button>
  );
}
