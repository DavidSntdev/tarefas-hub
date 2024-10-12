import { siteConfig } from "@/app/config/siteConfig";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AddNewTask() {
  return (
    <Button className="w-full rounded-xl items-center justify-start py-9 bg-creme text-base text-[#030616] font-semibold hover:bg-creme/70 flex gap-4">
      <div className="bg-laranja p-3 rounded-xl hover:bg-laranja/70">
        <Image
          src={siteConfig.task.add.icon}
          alt={siteConfig.task.add.text}
          width={24}
          height={24}
        />
      </div>
      {siteConfig.task.add.text}
    </Button>
  );
}
