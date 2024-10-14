export interface Task {
  id: number;
  titulo: string;
  description: string;
  emoji: string;
  tipo: "pendente" | "incompleto" | "concluido" | "nenhum";
}
