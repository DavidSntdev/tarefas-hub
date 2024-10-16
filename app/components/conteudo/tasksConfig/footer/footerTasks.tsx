"use client";
import { corHover } from "@/app/utils/corHover";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface FooterTasksProps {
  onSave: () => void;
  onDelete: () => void;
}

export default function FooterTasks({ onSave, onDelete }: FooterTasksProps) {
  const bgSave = "bg-azul";
  const hoverSave = corHover(bgSave);

  const bgDelete = "bg-cinzaEscuro";
  const hoverDelete = corHover(bgDelete);

  return (
    <div className="w-full flex gap-3 justify-end items-center">
      <Button
        className={`rounded-full flex justify-center gap-2 ${bgDelete} ${hoverDelete} font-normal`}
        onClick={onDelete}
      >
        Deletar
        <Image
          src="/icons/trash.svg"
          className="rounded-full size-5"
          alt="Delete icon"
          width={20}
          height={20}
        />
      </Button>
      <Button
        className={`rounded-full flex justify-center gap-2 ${bgSave} ${hoverSave} font-normal`}
        onClick={onSave}
      >
        Salvar
        <Image
          src="/icons/iconDone.svg"
          className="rounded-full size-5"
          alt="Save icon"
          width={20}
          height={20}
        />
      </Button>
    </div>
  );
}
