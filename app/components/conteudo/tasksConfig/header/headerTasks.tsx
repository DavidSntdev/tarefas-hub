import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeaderTasksProps {
  cancelar: () => void;
}

export default function HeaderTasks(props: HeaderTasksProps) {
  return (
    <div className="flex justify-between">
      <h1 className="font-medium text-xl text-black">Task details</h1>
      <Button
        variant="outline"
        size="icon"
        className="bg-white border-[1px] rounded-lg border-pretoTransparente/10 hover:bg-pretoTransparente"
        onClick={props.cancelar}
      >
        <Image
          src="/icons/closeTasksEdit.svg"
          className=" rounded-full size-6"
          alt="icons"
          width={24}
          height={24}
        />
      </Button>
    </div>
  );
}
