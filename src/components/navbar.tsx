"use client";
import useIsMobile from "@/hooks/useMediaQuery";
import Hamburger from "@/img/hamburger";
import HorizontalLogo from "@/img/hori_logo";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

export default function Navbar() {
  const isMobile = useIsMobile();
  const [navOpen, isNavOpen] = useState(false);
  return (
    <nav className="max-w-8xl fixed z-50 w-full bg-white left-0 md:h-15 h-auto flex items-center m-auto">
      <div className="w-[82%] flex flex-col md:flex-row my-0 mx-auto h-full">
        <Link href="/" className="flex items-center mr-6 h-15">
          <HorizontalLogo />
        </Link>
        {isMobile ? (
          <div className="absolute top-4 right-5 flex items-center">
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
              <NavLink itemName="회사 소개" where="/team" />
              <NavLink itemName="자주 묻는 질문" where="/support/faq" />
              <NavLink itemName="도입 문의" where="/sales" />
              <NavLink itemName="채용" where="/career" />
              <div className="flex items-center p-0 ml-11 flex-row">
                <NavLink itemName="KOR" where="/" />
                <span className="text-gray-300">|</span>
                <NavLink itemName="ENG" where="/en" disabled />
              </div>
            </ul>
          </div>
        )}
        {navOpen && isMobile && (
          <div className="flex flex-1 max-h-full justify-between my-0 -mx-6 flex-col w-screen">
            <ul className="flex flex-col items-center p-0 m-0"></ul>
            <ul
              className="flex flex-col p-0 m-0"
              onClick={() => isNavOpen(!navOpen)}
            >
              <NavLink itemName="회사 소개" where="/team" isMobile />
              <NavLink itemName="고객센터" where="/support" isMobile />
              <NavLink
                itemName="자주 묻는 질문"
                where="/support/faq"
                isMobile
              />
              <NavLink itemName="채용" where="/career" isMobile />
              <div className="flex items-center p-0 flex-row">
                <NavLink itemName="KOR" where="/" isMobile />
                <span className="text-gray-300">|</span>
                <NavLink itemName="ENG" where="/en" disabled isMobile />
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
