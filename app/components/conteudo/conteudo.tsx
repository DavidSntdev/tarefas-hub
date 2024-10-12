import ConteudoLayout from "../layouts/conteudoLayout";
import Header from "./header/header";
import AddNewTask from "./tasksContent/buttonstask/addnewtask";
import Tasks from "./tasksContent/tasks";

export default function Conteudo() {
  return (
    <ConteudoLayout className="p-10 flex flex-col gap-8">
      <Header />
      <Tasks />
      <AddNewTask />
    </ConteudoLayout>
  );
}
