import { siteConfig } from "@/app/config/siteConfig";
import TituloPrincipal from "../../common/tituloPrincipal";

export default function Header() {
  return (
    <TituloPrincipal
      titulo={siteConfig.header.titulo}
      subtitulo={siteConfig.header.subtitulo}
      icone1={siteConfig.header.icone1}
      icone2={siteConfig.header.icone2}
    />
  );
}
