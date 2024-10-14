"use client";
import { useState } from "react";
import LabelTasks from "../components/labelTasks";
import IconsOptions from "../components/iconsOptions";
import icons from "@/app/config/iconsConfig";

export default function InputIcons() {
  const [selectedOption, setSelectedOption] = useState("icon1");

  return (
    <div className="grid w-full items-center gap-1.5">
      <LabelTasks text="Icon" htmlFor="icon" />
      <div className="flex gap-3">
        {Object.entries(icons).map(([key, icon]) => (
          <IconsOptions
            key={key}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            {...icon}
          />
        ))}
      </div>
    </div>
  );
}
