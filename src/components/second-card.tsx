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
    <div className="w-[25.625rem] h-[26.625rem] bg-white rounded-lg shadow-md flex flex-col">
      <Image
        src={imageSrc}
        alt={category}
        width={410}
        height={230}
        className="w-full h-[14.375rem] object-cover rounded-t-lg"
      />

      <div className="p-4 flex flex-col h-full">
        {/* Контейнер с метками */}
        <div className="flex gap-3 items-center mb-2">
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
        <div className="mb-4 h-17 flex items-center">
          <h3 className="text-xl font-bold line-clamp-3">
            {title}
          </h3>
        </div>

        {/* Нижняя панель с информацией */}
        <div className="flex items-center pb-1 gap-4 text-sm text-black mt-auto font-semibold">
          <div className="flex items-center space-x-1">
            <List size={16} />
            <span>{sections} {getSectionLabel(sections)} </span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Calendar size={16} />
            <span>{dateRange}</span>
          </div>
        </div>
      </div>
    </div>
  );
}