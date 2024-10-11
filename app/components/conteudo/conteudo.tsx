import { siteConfig } from "@/app/config/siteConfig";
import ConteudoLayout from "../layouts/conteudoLayout";
import TituloPrincipal from "../common/tituloPrincipal";

export default function Conteudo() {
  return (
    <ConteudoLayout className="p-14">
      <TituloPrincipal
        titulo={siteConfig.header.titulo}
        subtitulo={siteConfig.header.subtitulo}
        icone1={siteConfig.header.icone1}
        icone2={siteConfig.header.icone2}
      />
    </ConteudoLayout>
  );
}
