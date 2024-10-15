import { Task } from "../interfaces/task";

export const tasksMap: { [key: string]: Task } = {
  task1: {
    id: 1,
    titulo: "Exemplo 1",
    description: "",
    tipo: "pendente",
    emoji: "⏰",
  },
  task2: {
    id: 2,
    titulo: "Exemplo 2",
    description: "",
    tipo: "concluido",
    emoji: "🏋️‍♂️",
  },
  task3: {
    id: 3,
    titulo: "Exemplo 3",
    description: "",
    tipo: "incompleto",
    emoji: "☕",
  },
  task4: {
    id: 4,
    titulo: "Exemplo 4",
    description:
      "Não edite essas tarefas já adicionadas, são somente exemplos, quando você adicionar uma tarefa nova elas sairão",
    tipo: "nenhum",
    emoji: "📚",
  },
};
