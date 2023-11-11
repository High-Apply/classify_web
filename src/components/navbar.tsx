import HorizontalLogo from "@/img/hori_logo";
import Link from "next/link";
import Navitem from "./navitem";

export default function Navbar() {
  return (
    <nav className="max-w-8xl fixed z-50 w-full bg-white left-0 h-15 flex items-center m-auto">
      <div className="w-[88%] flex flex-row my-0 mx-auto h-full">
        <Link href="/" className="flex items-center mr-6 h-15">
          <HorizontalLogo />
        </Link>
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
      </div>
    </nav>
  );
}
