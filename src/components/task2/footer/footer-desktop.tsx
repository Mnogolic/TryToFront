"use client";

import Image from "next/image";
import { Moon, Search, MoonIcon,} from "lucide-react";
//import { MdDarkMode, MdLightMode, MdSearch } from "react-icons/md";
import Link from "next/link";
import { Input } from "@heroui/react";
import {Checkbox} from "@heroui/react";
import {Textarea} from "@heroui/react";



export default function FooterDesktop() {
  return (
    <div className="">
      <div className="container my-12 ">
        <div className="h-full w-full flex flex-wrap items-center justify-between mb-12">
          <Link href="/">
            <div className="flex shrink-0 items-center gap-2">
              <Image
                src="/images/techInLogo10.svg"
                alt="Логотип TechIn"
                //className="object-cover"
                width={41.66}
                height={42}
              />

              <div className="flex flex-col gap-1 pt-2">
                <Image
                  src="/images/tech-inText10.svg"
                  alt="Логотип TechIn"
                  width={85.34}
                  height={10.75}
                />

                <Image
                  src="/images/tech-inTextSecondOne10.svg"
                  alt="Логотип TechIn"
                  width={64.88}
                  height={7.32}
                />
              </div>
            </div>
          </Link>

          <div className=" h-full flex flex-col">
            <div className="flex items-center gap-1.5 mb-12">
              <div className="flex flex-row items-center gap-1.6">
                <a
                  href="/page2"
                  className="text-black px-[1rem] py-[0.3rem] hover:bg-[#9E9B9B] rounded-4xl transition font-bold text-base whitespace-nowrap"
                >
                  Курсы
                </a>

                <a
                  href="/page2"
                  className="text-black px-[1rem] py-[0.3rem] hover:bg-[#9E9B9B] rounded-4xl transition font-bold text-base whitespace-nowrap"
                >
                  Лекторы
                </a>

                <a
                  href="/page2"
                  className="text-black px-[1rem] py-[0.3rem] hover:bg-[#9E9B9B] rounded-4xl transition font-bold text-base whitespace-nowrap"
                >
                  Материалы
                </a>

                <a
                  href="/page2"
                  className="text-black px-[1rem] py-[0.3rem] hover:bg-[#9E9B9B] rounded-4xl transition font-bold text-base whitespace-nowrap"
                >
                  Школьникам
                </a>

                <a
                  href="/page2"
                  className="text-black px-[1rem] py-[0.3rem] hover:bg-[#9E9B9B] rounded-4xl transition font-bold text-base whitespace-nowrap"
                >
                  О проекте
                </a>

                <a
                  href="/page2"
                  className="text-black px-[1rem] py-[0.3rem] hover:bg-[#9E9B9B] rounded-4xl transition font-bold text-base whitespace-nowrap"
                >
                  Контакты
                </a>

                <button className="mr-2 flex items-center justify-center text-white h-10 w-10 hover:bg-[#9E9B9B] bg-[#1A50D8] rounded-md ">
                  <Image
                  src="/images/icons/soc-telegram.svg"
                  alt="Логотип TechIn"
                  //className="object-cover"
                  width={24}
                  height={21}
                  />
                </button>  

                <button className="flex items-center justify-center text-white h-10 w-10 hover:bg-[#9E9B9B] bg-[#1A50D8] rounded-md ">
                  <Image
                  src="/images/icons/vk.svg"
                  alt="Логотип TechIn"
                  //className="object-cover"
                  width={20}
                  height={13.85}
                  />
                </button>    

              </div>
            </div>

            
          </div>
        </div>
        <div className="grid w-full grid-cols-6 gap-6">
          <div className="col-span-2 flex flex-col lg:grid-cols-3">
            <div className="pt-6 pl-4 flex mb-12 gap-12 items-center">
              <div className="w-[7.1875rem] h-[3rem] flex ">
                <Image
                src="/images/icons/partners/mgu-logo.svg"
                alt="Логотип партнёра"
                width={48}
                height={48}
                />
              </div>

              <div className="w-[7.1875rem] h-[3rem] flex ">
                <Image
                src="/images/icons/partners/basis.svg"
                alt="Логотип партнёра"
                width={95}
                height={48}
                />
              </div>
            </div>

            <div className="flex pl-4 gap-12 items-center">
              <div className=" w-[7.1875rem] h-[3rem] flex items-center">
                <Image
                src="/images/icons/partners/Component_1.svg"
                alt="Логотип партнёра"
                width={95}
                height={8}
                />
              </div>

              <div className="w-[7.1875rem] h-[3rem] flex ">
                <Image
                src="/images/icons/partners/Volnoe_delo.svg"
                alt="Логотип партнёра"
                width={95}
                height={48}
                />
              </div>
            </div>  
          </div>

          <div className="flex flex-col col-span-4">
            <h3 className="text-2xl leading-6 font-bold mb-8"> Свяжитесь с нами
            </h3>

            <div className="flex flex-col">
              <div className="flex mb-6">
                <div className="flex w-full h-10.5 md:flex-nowrap gap-5.5">
                  <Input                   
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Ваше имя" 
                    className="w-full " 
                    variant="bordered" 
                  />
                  <Input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    placeholder="Номер телефона"
                    className="w-full" 
                    variant="bordered" 
                  />
                </div> 
              </div>

              <div className="flex h-32 mb-8"> 
                {/* Не получается изменить высоту input`а */}
                <Textarea 
                isClearable
                placeholder="Enter your description"
                minRows={6}
                variant="bordered" 
                />
              </div>

              <div className="flex flex-wrap gap-6 items-center h-full w-full">
                <button className=" text-white hover:bg-[#9E9B9B] bg-[#1A50D8] rounded-full ">
                  <p className="text-small flex px-6 py-2.5 items-center justify-center primary-foreground"> Отправить </p>
                </button>

                <div className="flex ">
                  <Checkbox defaultSelected className="flex flex-wrap">
                    <div className="flex items-center">
                      <p className="flex text-small">Согласие с </p>
                      <span>&nbsp;</span>
                      <p className="flex text-small text-[#1A50D8]">политикой конфиденциальности</p>
                    </div>  

                  </Checkbox>
                </div> 
              </div>

               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
