import ConteudoLayout from "../layouts/conteudoLayout";
import Header from "./header/header";
import AddNewTask from "./buttonstask/addnewtask";

export default function Conteudo() {
  return (
    <ConteudoLayout className="p-14 flex flex-col gap-8">
      <Header />
      <AddNewTask />
    </ConteudoLayout>
  );
}
