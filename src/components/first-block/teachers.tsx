import { Share } from "lucide-react";
import Image from "next/image";

export function Teachers() {
  return (
    <div className=" bg-white rounded-2xl p-8 h-full">
      <div className="flex flex-col gap-6">
        <p className="font-normal leading-6 text-base">Преподаватель</p>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              fill
              sizes="100%"
              src="/images/jebalo.svg"
              alt="лицо"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-small">Дубынич</div>
            <div className="font-normal leading-4 text-xs">
              Вячеславр Альбертович
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
