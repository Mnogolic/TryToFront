import Image from "next/image";
import { List, Calendar } from "lucide-react";

function getSectionLabel(sections: number): string {
  if (sections % 10 === 1 && sections % 100 !== 11) {
    return 'раздел';
  } else if (
    [2, 3, 4].includes(sections % 10) &&
    ![12, 13, 14].includes(sections % 100)
  ) {
    return 'раздела';
  } else {
    return 'разделов';
  }
}

export function SecondCard({
  imageSrc = "/images/webLearningGirl.png",
  category = "Астрономия",
  title = "Астрономия для старших школьников. Космические объекты (планеты, кольца, спутники, звезды)",
  sections = 4,
  dateRange = "6 мая 2022 – 6 мая 2025",
}) {
  return (
    <div className=" bg-white rounded-lg h-full flex flex-col">
      <div className="relative h-[14.375rem] rounded-t-lg overflow-hidden">
      <Image
        fill
        sizes="100%"
        src={imageSrc}
        alt={category}
        className="object-cover"
      />
     </div>

      <div className="p-4 flex flex-col flex-1">
        {/* Контейнер с метками */}
        <div className="flex gap-3 items-center mb-2 flex-wrap">
          {/* Метка "Новый" */}
          <span className="inline-flex items-center justify-center h-6 border rounded-full px-2 text-sm font-medium text-[#E29400] border-[#E29400]">
            Новый
          </span>

          {/* Метка категории */}
          <span className="inline-flex items-center justify-center h-6 border rounded-full px-2 text-sm font-medium text-black border-[#D4D4D8]">
            {category}
          </span>
        </div>

        {/* Блок с заголовком — фиксированная высота */}
        <div className="mb-5 ">
          <h3 className="text-xl font-bold line-clamp-3">
            {title}
          </h3>
        </div>

        {/*Прикрепление к низу*/}
        <div className="mt-auto">
          {/*флекс-элементы должны идти в строку*/} 
          <div className="flex gap-4 text-sm text-black font-semibold flex-wrap">
            {/*расстояние между элементами*/} 
            <div className="flex items-center gap-1">
              <List size={16} />
              <span className="whitespace-nowrap">{sections} {getSectionLabel(sections)} </span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span className="whitespace-nowrap">{dateRange}</span>  {/*whitespace-nowrap */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}