import Image from "next/image";
import { List, Calendar } from "lucide-react";

export function RelatedCourse({
  imageSrc = "/images/webLearningGirl.png",
  category = "Биология",
  title = "Физиология человека и животных",
  teacherFirstName = "Дубынич",
  teacherSecondName = "Вячеславр Альбертович",
  view = 0,
  imageSrcTeacher = "/images/related-courses/teacher1",
}) {
  return (
    <div className=" bg-white rounded-lg h-full flex flex-col">
      <div className="relative h-[14.375rem] rounded-t-lg overflow-hidden">
        <Image
          fill
          sizes="100%"
          src={imageSrc}
          alt="Похожий курс"
          className="object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        {/* Контейнер с метками */}
        <div className="mb-7 flex flex-col gap-1.5">
          {/* Метка категории */}
          <span className=" justify-center text-sm font-medium text-black text-emerald-500">
            {category}
          </span>
        {/* Блок с заголовком — фиксированная высота */}
        
          <h3 className="text-xl font-bold line-clamp-3">{title}, Количество просмотров - {view}</h3>
        </div>

        {/*Прикрепление к низу*/}
        <div className="mt-auto">
          {/*флекс-элементы должны идти в строку*/}
          <div className="flex gap-4 text-sm text-black font-semibold flex-wrap">
            {/*расстояние между элементами*/}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex relative h-10 w-10 rounded-full overflow-hidden p-4">
                <Image
                  fill
                  sizes="100%"
                  src={imageSrcTeacher}
                  alt="лицо"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-small">{teacherFirstName}</div>
                <div className="font-normal leading-4 text-xs">
                  {teacherSecondName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
