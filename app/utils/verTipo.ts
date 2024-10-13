export const verTipo = (tipo: string) => {
  switch (tipo) {
    case "pendente":
      return {
        bgCor: "bg-amarelo",
        bgHover: "hover:bg-amarelo/60",
        icone: "/icons/iconPendente.svg",
        bgIcone: "bg-laranja",
        hoverIcone: "hover:bg-laranja/60",
      };

    case "incompleto":
      return {
        bgCor: "bg-vermelhoClaro",
        bgHover: "hover:bg-vermelhoClaro/60",
        icone: "/icons/iconIncompleto.svg",
        bgIcone: "bg-vermelho",
        hoverIcone: "hover:bg-vermelho/60",
      };

    case "concluido":
      return {
        bgCor: "bg-verdeClaro",
        bgHover: "hover:bg-verdeClaro/60",
        icone: "/icons/iconConcluido.svg",
        bgIcone: "bg-verde",
        hoverIcone: "hover:bg-verde/60",
      };

    default:
      return {
        bgCor: "bg-cinza",
        bgHover: "hover:bg-cinza/70",
        icone: "",
        bgIcone: "",
        hoverIcone: "",
      };
  }
};
