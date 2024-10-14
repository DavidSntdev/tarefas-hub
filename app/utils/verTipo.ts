export const verTipo = (tipo: string) => {
  switch (tipo) {
    case "pendente":
      return {
        bgCor: "bg-amarelo",
        icone: "/icons/iconPendente.svg",
        bgIcone: "bg-laranja",
      };

    case "incompleto":
      return {
        bgCor: "bg-vermelhoClaro",
        icone: "/icons/iconIncompleto.svg",
        bgIcone: "bg-vermelho",
      };

    case "concluido":
      return {
        bgCor: "bg-verdeClaro",
        icone: "/icons/iconConcluido.svg",
        bgIcone: "bg-verde",
      };

    default:
      return {
        bgCor: "bg-cinza",
        icone: "",
        bgIcone: "",
        hoverIcone: "",
      };
  }
};
