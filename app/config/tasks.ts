import { Task } from "../interfaces/task";

export const tasksMap: { [key: string]: Task } = {
  task1: {
    id: 1,
    titulo: "Task in Progress",
    description: "",
    tipo: "pendente",
    emoji: "⏰",
  },
  task2: {
    id: 2,
    titulo: "Task Completed",
    description: "",
    tipo: "concluido",
    emoji: "🏋️‍♂️",
  },
  task3: {
    id: 3,
    titulo: "Task Won't Do",
    description: "",
    tipo: "incompleto",
    emoji: "☕",
  },
  task4: {
    id: 4,
    titulo: "Task To Do",
    description: "Work on a Challenge on devChallenges.io, learn Typescript.",
    tipo: "nenhum",
    emoji: "📚",
  },
};
