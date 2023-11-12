"use client";
import useIsMobile from "@/hooks/useMediaQuery";
import Hamburger from "@/img/hamburger";
import HorizontalLogo from "@/img/hori_logo";
import Link from "next/link";
import { useState } from "react";
import Downloadbutton from "./downloadbutton";
import Navitem from "./navitem";

export default function Navbar() {
  const isMobile = useIsMobile();
  const [navOpen, isNavOpen] = useState(false);
  return (
    <nav className="max-w-8xl fixed z-50 w-full bg-white left-0 md:h-15 h-auto transition-height duration-200 flex items-center m-auto">
      <div className="w-[88%] flex flex-col md:flex-row my-0 mx-auto h-full">
        <Link href="/" className="flex items-center mr-6 h-15">
          <HorizontalLogo />
        </Link>
        {isMobile ? (
          <div className="absolute top-4 right-5 flex items-center">
            <Downloadbutton>앱 다운로드</Downloadbutton>
            <button
              onClick={() => isNavOpen(!navOpen)}
              className="h-full py-0 px-2 -mr-2 border-0 cursor-pointer"
            >
              <Hamburger />
            </button>
          </div>
        ) : (
          <div className="flex flex-1 max-h-full justify-between">
            <ul className="flex items-center p-0 m-0"></ul>
            <ul className="flex items-center p-0 m-0">
              <Navitem itemName="회사 소개" where="/team" />
              <Navitem itemName="고객센터" where="/team" />
              <Navitem itemName="자주 묻는 질문" where="/team" />
              <Navitem itemName="토스인증서" where="/team" />
              <Navitem itemName="채용" where="/team" />
              <div className="flex items-center p-0 ml-11 flex-row">
                <Navitem itemName="KOR" where="/kor" />
                <span className="text-gray-300">|</span>
                <Navitem itemName="ENG" where="/ENG" disabled />
              </div>
            </ul>
          </div>
        )}
        {navOpen && (
          <div className="flex flex-1 max-h-full justify-between my-0 -mx-6 flex-col w-screen">
            <ul className="flex flex-col items-center p-0 m-0"></ul>
            <ul className="flex flex-col p-0 m-0">
              <Navitem itemName="회사 소개" where="/team" isMobile />
              <Navitem itemName="고객센터" where="/team" isMobile />
              <Navitem itemName="자주 묻는 질문" where="/team" isMobile />
              <Navitem itemName="토스인증서" where="/team" isMobile />
              <Navitem itemName="채용" where="/team" isMobile />
              <div className="flex items-center p-0 flex-row">
                <Navitem itemName="KOR" where="/kor" isMobile />
                <span className="text-gray-300">|</span>
                <Navitem itemName="ENG" where="/ENG" disabled isMobile />
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
