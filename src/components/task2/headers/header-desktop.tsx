// components/headers/header-desktop.tsx
"use client";

import Image from "next/image";
import { Moon, Search, MoonIcon } from "lucide-react";
//import { MdDarkMode, MdLightMode, MdSearch } from "react-icons/md";
import Link from "next/link";

export default function HeaderDesktop() {
  return (
    <div className="">
      <div className="container my-12 ">
        <div className="h-full w-full flex flex-nowrap items-center justify-between">
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

          <div className=" h-full flex flex-row">
            <div className="flex items-center gap-1.5">
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
                  Школьникам
                </a>

                <a
                  href="/page2"
                  className="text-black px-[1rem] py-[0.3rem] hover:bg-[#9E9B9B] rounded-4xl transition font-bold text-base whitespace-nowrap"
                >
                  О проекте
                </a>
              </div>

              <Link href="/page2">
                <button className="text-black p-2.5 hover:bg-[#9E9B9B] rounded-full transition">
                  <Search className="size-5" />
                </button>
              </Link>

              <button className=" text-white h-10 w-[5.8125rem] hover:bg-[#9E9B9B] bg-[#1A50D8] rounded-full ">
                <p className=" text-sm"> Войти </p>
              </button>

              <button className="group hover:bg-[#9E9B9B] flex text-black p-[0.625rem] rounded-full transition">
                <div className="flex  py-[0.375rem] bg-[#E4E4E7] group-hover:bg-[#E4E4E7] rounded-full w-[5rem] transition-color">
                  <div className="flex  justify-center w-[3rem] pl-[0.1rem] transition-color">
                    <div className="flex bg-white group-hover:bg-[black] rounded-full size-[2rem] items-center justify-center transition-color">
                      <Moon className="size-[1.5rem] text-[black] group-hover:text-[white] transition-color" />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
