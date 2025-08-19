import {Share} from "lucide-react"
import Image from "next/image";

export function Course() {
  return (
    <div className="w-full bg-white rounded-2xl p-8">
        <div className="flex flex-wrap mb-6 gap-3 items-center">
          <div className="px-1 font-bold text-[#33B458] border-2 border-black leading-6 text-base">Биология</div>
          <div className="font-normal text-black leading-6 text-base">29 лекций</div>
        </div>
        <h3 className=" mb-6 text-4xl font-bold text-black">100 часов школьной биологии. Анатомия и физиология человека</h3>
        <p className="text-base text-black font-normal">
          Освоение технологий будущего: анализ изображений, машинное обучение и AI. Учебный курс «Компьютерное зрение» преподавателя ВМК МГУ Конушина А.С.
        </p>
        <hr className="my-8 h-[0.0625rem] text-gray-300"/>
        <div className="flex flex-row justify-between items-center">
          
          <div className="flex gap-2.5 mt-4 flex-wrap"> {/*поправить mt, рпибить два блока к низу при помощи родительского элемента на 16ой 
          (подсказка - выравнивание по низму, шеуьы-bottom), вместо p использовать div для таких блоков*/}
            <div className="inline-flex items-center justify-center h-6 border rounded-full px-2 text-xs font-medium border-[#D4D4D8] ">
              лекции
            </div>

            <p className="inline-flex items-center justify-center h-6 border rounded-full px-2 text-xs font-medium border-[#D4D4D8]">
              спецкурс
            </p>

            <p className="inline-flex items-center justify-center h-6 border rounded-full px-2 text-xs font-medium  border-[#D4D4D8]">
              Биологический факультет
            </p>

            <p className="inline-flex items-center justify-center h-6 border rounded-full px-2 text-xs font-medium  border-[#D4D4D8]">
              2023
            </p>
          </div>
          
          <button className="flex text-lg gap-2 text-black size-md px-6 py-2.5 border-[#D4D4D8] border rounded-lg justify justify-center">
            <Share className="size-[1.25rem]" />
            <p className=" text-sm"> Поделиться </p>
          </button>
        </div>
      </div>
    );
}     