"use client";
import { corHover } from "@/app/utils/corHover";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useState, useRef } from "react";

interface IconsPersProps {
  setSelectedOption: (option: string) => void;
  selectedOption: string;
}

export default function IconsPers(props: IconsPersProps) {
  const [emoji, setEmoji] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const bgColor =
    emoji && props.selectedOption === emoji ? "bg-amarelo" : "bg-cinza";
  const bgHover = corHover(bgColor);

  const handleEmojiInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmoji(e.target.value);
    props.setSelectedOption(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <Button
        onClick={handleButtonClick}
        className={`px-2 py-6 rounded-xl text-2xl flex items-center justify-center transition-colors ${bgColor} ${bgHover}`}
      >
        {emoji ? emoji : <PlusIcon />}
      </Button>
      <input
        ref={inputRef}
        type="text"
        id="emojiPers"
        name="emojiPers"
        maxLength={2}
        value={emoji}
        onChange={handleEmojiInput}
        className="w-12 border h-full rounded-xl text-center border-1 border-pretoTransparente"
      />
    </div>
  );
}
