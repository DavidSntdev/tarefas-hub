import LabelTasks from "./components/labelTasks";
import InputIcons from "./inputs/inputIcons";
import HeaderTasks from "./header/headerTasks";
import InputName from "./inputs/inputName";
import InputDescription from "./inputs/inputDescription";

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
          <div className="grid w-full items-center gap-1.5">
            <LabelTasks text="Status" htmlFor="status" />
          </div>
        </div>
        <div className="w-full flex gap-3 justify-end items-center">
          <button>Delete</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}
