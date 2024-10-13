import Image from "next/image";

interface TituloProps {
  titulo: string;
  icone1: string;
  icone2: string;
  subtitulo: string;
}

export default function TituloPrincipal(props: TituloProps) {
  return (
    <div className="flex flex-col items-center sm:items-start gap-[6px]">
      <div className="flex items-center gap-2">
        <Image src={props.icone1} alt={props.titulo} width={35} height={35} />
        <h1 className="text-3xl sm:text-title">{props.titulo}</h1>
        <Image src={props.icone2} alt={props.titulo} width={25} height={25} />
      </div>
      <p className="sm:pl-12">{props.subtitulo}</p>
    </div>
  );
}
