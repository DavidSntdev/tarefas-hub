"use client";
import { useState } from "react";
import LabelTasks from "../components/labelTasks";
import IconsOptions from "../components/iconsOptions";

export default function InputIcons() {
  const [selectedOption, setSelectedOption] = useState("icon1");

  return (
    <div className="grid w-full items-center gap-1.5">
      <LabelTasks text="Icon" htmlFor="icon" />
      <div className="flex gap-3">
        <IconsOptions
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          text="⏰"
          id="icon1"
        />
        <IconsOptions
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          text="⏰"
          id="icon2"
        />
        <IconsOptions
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          text="⏰"
          id="icon3"
        />
        <IconsOptions
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          text="⏰"
          id="icon4"
        />
        <IconsOptions
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          text="⏰"
          id="icon5"
        />
      </div>
    </div>
  );
}
