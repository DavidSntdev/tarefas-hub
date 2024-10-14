import { corHover } from "@/app/utils/corHover";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FooterTasks() {
  const bgSave = "bg-azul";
  const hoverSave = corHover(bgSave);

  const bgDelete = "bg-cinzaEscuro";
  const hoverDelete = corHover(bgDelete);

  return (
    <div className="w-full flex gap-3 justify-end items-center">
      <Button
        className={`rounded-full flex justify-center gap-2 ${bgDelete} ${hoverDelete} font-normal`}
      >
        Delete
        <Image
          src="/icons/trash.svg"
          className=" rounded-full size-5"
          alt="icons"
          width={20}
          height={20}
        />
      </Button>
      <Button
        className={`rounded-full flex justify-center gap-2 ${bgSave} ${hoverSave} font-normal`}
      >
        Save
        <Image
          src="/icons/Done_round.svg"
          className=" rounded-full size-5"
          alt="icons"
          width={20}
          height={20}
        />
      </Button>
    </div>
  );
}
