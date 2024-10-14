import LabelTasks from "../components/labelTasks";
import IconsOptions from "../components/iconsOptions";
import icons from "@/app/config/iconsConfig";
import { InputTaskProps } from "./inputName";

export default function InputIcons(props: InputTaskProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <LabelTasks text="Icon" htmlFor="icon" />
      <div className="flex gap-3">
        {Object.entries(icons).map(([key, icon]) => (
          <IconsOptions
            key={key}
            selectedOption={props.value}
            setSelectedOption={props.onChange}
            emoji={icon.emoji}
          />
        ))}
      </div>
    </div>
  );
}
