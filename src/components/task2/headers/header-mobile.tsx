// components/headers/header-mobile.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { Moon, Search, MoonIcon, List } from "lucide-react";
//import { SearchIcon } from "react-icons/fa";
/*
import { MdDarkMode, MdLightMode, MdSearch } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { Moon, Search, Menu} from "lucide-react"
*/

export default function HeaderMobile() {
  return (
    <header className="bg-white">
      <div className="container mx-auto p-4 ">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0 items-center gap-2">
            <div className="relative">
              <Image
                src="/images/techInLogo10.svg"
                alt="Логотип TechIn"
                //className="object-cover"
                width={31.71}
                height={32}
              />
            </div>

            <div className="flex flex-col gap-1 pt-2">
              <Image
                src="/images/tech-inText10.svg"
                alt="TechIn надпись"
                width={64.96}
                height={12.73}
              />
              <Image
                src="/images/tech-inTextSecondOne10.svg"
                alt="интерфейс науки"
                width={49.38}
                height={5.58}
              />
            </div>
          </div>

          <div className="flex gap-[0.5rem]">
            <button className="group hover:bg-[#9E9B9B] flex text-black p-[0.625rem] rounded-full transition">
              <div className="flex py-[0.375rem] bg-[#E4E4E7] group-hover:bg-[#E4E4E7] rounded-full w-[5rem] transition-colors">
                <div className="flex items-center justify-center w-[3rem] pl-[0.1rem] transition-colors">
                  <div className="flex bg-white group-hover:bg-[black] rounded-full size-[2rem] items-center justify-center transition-color">
                    <Moon className="size-[1.5rem] text-[black] group-hover:text-[white] transition-color" />
                  </div>
                </div>
              </div>
            </button>

            {/* <button className="text-black p-[0.625rem] hover:bg-[#F2F2F2] rounded-full transition">
              <Moon className="size-[2rem]" />
            </button> */}

            <button className="text-black p-[0.625rem] hover:bg-[#F2F2F2] rounded-full transition">
              <Search className="size-[2rem]" />
            </button>

            <button className="text-black p-[0.625rem] hover:bg-[#F2F2F2] rounded-full transition">
              <List className="size-[2rem]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
