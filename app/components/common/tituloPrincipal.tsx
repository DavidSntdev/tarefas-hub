import Image from "next/image";

interface TituloProps {
  titulo: string;
  icone1: string;
  icone2: string;
  subtitulo: string;
}

export default function TituloPrincipal(props: TituloProps) {
  return (
    <div className="flex flex-col gap-[6px]">
      <div className="flex items-center gap-2">
        <Image src={props.icone1} alt={props.titulo} width={40} height={40} />
        <h1 className="text-title">{props.titulo}</h1>
        <Image src={props.icone2} alt={props.titulo} width={40} height={40} />
      </div>
      <p className="pl-12">{props.subtitulo}</p>
    </div>
  );
}
