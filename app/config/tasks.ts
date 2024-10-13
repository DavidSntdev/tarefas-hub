interface Task {
  title: string;
  description: string;
  tipo: "em-andamento" | "concluido" | "incompleto" | "nenhum";
  emoji: string;
}

export const tasks: Record<string, Task> = {
  task1: {
    title: "Task in Progress",
    description: "",
    tipo: "em-andamento",
    emoji: "⏰",
  },
  task2: {
    title: "Task Completed",
    description: "",
    tipo: "concluido",
    emoji: "🏋️‍♂️",
  },
  task3: {
    title: "Task Won't Do",
    description: "",
    tipo: "incompleto",
    emoji: "☕",
  },
  task4: {
    title: "Task To Do",
    description: "Work on a Challenge on devChallenges.io learn Typescript.",
    tipo: "nenhum",
    emoji: "📚",
  },
};
