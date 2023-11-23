"use client";
import useIsMobile from "@/hooks/useMediaQuery";
import Hamburger from "@/svg/hamburger";
import HorizontalLogo from "@/svg/hori_logo";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import NavLink from "./navLink";

export default function Navbar() {
  const isMobile = useIsMobile();
  const [navOpen, isNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollY(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={
        "max-w-8xl fixed z-50 w-full left-0 md:h-15 h-auto flex items-center m-auto" +
        (scrollY === 0 ? "bg-transparent" : "shadow-md bg-white")
      }
    >
      <nav className="w-[92%] flex flex-col md:flex-row my-0 mx-auto h-full">
        <Link to="top" className="flex items-center mr-6 h-15 cursor-pointer">
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
              <NavLink itemName="회사 소개" where="team" />
              <NavLink itemName="자주 묻는 질문" where="faq" />
              <NavLink itemName="도입 문의" where="sales" />
              <NavLink itemName="채용" where="career" />
              <div className="flex items-center p-0 ml-11 flex-row">
                <NavLink itemName="KOR" where="top" />
                <span className="text-gray-300">|</span>
                <NavLink itemName="ENG" where="top" disabled />
              </div>
            </ul>
          </div>
        )}
        {navOpen && isMobile && (
          <div className="flex flex-1 max-h-full justify-between my-0 -mx-6 flex-col w-screen bg-white">
            <ul className="flex flex-col items-center p-0 m-0"></ul>
            <ul
              className="flex flex-col p-0 m-0"
              onClick={() => isNavOpen(!navOpen)}
            >
              <NavLink itemName="회사 소개" where="team" isMobile />
              <NavLink itemName="고객센터" where="support" isMobile />
              <NavLink itemName="자주 묻는 질문" where="faq" isMobile />
              <NavLink itemName="채용" where="career" isMobile />
              <div className="flex items-center p-0 flex-row">
                <NavLink itemName="KOR" where="top" isMobile />
                <span className="text-gray-300">|</span>
                <NavLink itemName="ENG" where="top" disabled isMobile />
              </div>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
