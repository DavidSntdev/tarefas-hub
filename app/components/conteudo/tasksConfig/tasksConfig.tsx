import InputIcons from "./inputs/inputIcons";
import HeaderTasks from "./header/headerTasks";
import InputName from "./inputs/inputName";
import InputDescription from "./inputs/inputDescription";
import FooterTasks from "./footer/footerTasks";
import InputTipos from "./inputs/inputTipos";

interface TasksConfigProps {
  cancelar: () => void;
}

export default function TasksConfig(props: TasksConfigProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-pretoTransparente p-5">
      <div className="w-full h-full bg-white rounded-xl p-5 flex flex-col justify-between">
        <div className="flex flex-col w-full gap-5">
          <HeaderTasks cancelar={props.cancelar} />
          <InputName />
          <InputDescription />
          <InputIcons />
          <InputTipos />
        </div>
        <FooterTasks />
      </div>
    </div>
  );
}
