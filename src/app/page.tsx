/* eslint-disable @next/next/no-img-element */
"use client";
import { StoreDownloadButton } from "@/components/CustomButtons";
import FaqItem from "@/components/main/faq-item";
import InputForm from "@/components/main/input-form";
import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface FaqState {
  faq1: boolean;
  faq2: boolean;
  faq3: boolean;
  faq4: boolean;
}

export default function Home() {
  const [faqs, setFaqs] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
  });

  const toggleFaq = (faqKey: keyof FaqState) => {
    setFaqs((prevFaqs) => ({
      ...prevFaqs,
      [faqKey]: !prevFaqs[faqKey],
    }));
  };

  const { faq1, faq2, faq3, faq4 } = faqs;

  return (
    <>
      <main className="pt-32 md:pt-44 max-w-8xl">
        <section className="pr-0 h-[560px] flex flex-col md:flex-row justify-start md:pl-28 pl-0">
          <div className="md:w-1/2 w-[92%] flex flex-col md:pr-10 my-0 mx-auto">
            <h3 className="md:text-h4 text-b2 font-bold text-lightGreen mb-3">
              새로운 교육, 새로운 어플리케이션
            </h3>
            <h1 className="md:text-t2 text-h2 leading-normal font-bold max-w-[600px] mb-6">
              클래시파이로 일상을 바꿔보세요.
            </h1>
            <p className="md:text-b2 text-b3 leading-relaxed">
              새롭게 변화하는 교육 제도에 발맞춘 새로운 어플리케이션을
              사용하세요. 개인별 시간표, 공유 캘린더, 선택 과목 안내 등등.
            </p>
            <div className="text-center flex flex-row items-start md:mt-10 mt-6 w-full">
              <StoreDownloadButton downloadLink="https://classify.kr">
                <Image
                  src="/img/applekorea.png"
                  width={24}
                  height={24}
                  alt="애플코리아 로고"
                />
                App Store
              </StoreDownloadButton>
              <StoreDownloadButton downloadLink="https://classify.kr">
                <Image
                  src="/img/googleplay.png"
                  width={24}
                  height={24}
                  alt="구글 플레이 로고"
                />
                Google Play
              </StoreDownloadButton>
            </div>
          </div>
          <div className="md:flex items-center justify-center md:w-1/2 hidden relative -mt-12">
            <Carousel
              showArrows={false}
              centerMode={false}
              centerSlidePercentage={50}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={7000}
              transitionTime={1500}
              width={400}
            >
              <img src={"/img/timetable_week.png"} alt={`주간 시간표`} />
              <img src={"/img/timetable_every.png"} alt={`일일 시간표`} />
              <img src={"/img/share_calendar.png"} alt={`공유 캘린더`} />
            </Carousel>
          </div>
        </section>
        <section
          id="faq"
          className="pr-0 h-auto flex flex-col md:flex-row justify-start max-w-[1440px] mt-52 "
        >
          <div className="flex md:flex-1 md:flex-row flex-col w-full">
            <div className="md:w-28 w-0"></div>
            <div className="md:w-1/2 w-[95%] flex flex-col items-start justify-start gap-4 mb-8 md:mb-0">
              <h1 className="md:text-t2 text-h3 font-bold text-left">
                자주 묻는 질문
              </h1>
              <h2 className="text-h3 leading-normal">무엇이든 찾아보세요.</h2>
            </div>
            <div className="md:w-1/2 w-[95%] flex flex-col gap-7 justify-start items-start">
              <FaqItem
                ask="학생들의 개인별 시간표 정보는 어떻게 알 수 있나요?"
                ans="모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다. 중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 내부규율에 관한 규칙을 제정할 수 있다. 의무교육은 무상으로 한다. 모든 국민은 인간다운 생활을 할 권리를 가진다. 국무위원은 국무총리의 제청으로 대통령이 임명한다. 누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다."
                isOpen={faq1}
                onClick={() => toggleFaq("faq1")}
              />
              <FaqItem
                ask="학생들의 개인별 시간표 정보는 어떻게 알 수 있나요?2"
                ans="dfdf"
                isOpen={faq2}
                onClick={() => toggleFaq("faq2")}
              />
              <FaqItem
                ask="학생들의 개인별 시간표 정보는 어떻게 알 수 있나요?3"
                ans="dfdf"
                isOpen={faq3}
                onClick={() => toggleFaq("faq3")}
              />
              <FaqItem
                ask="학생들의 개인별 시간표 정보는 어떻게 알 수 있나요?4"
                ans="dfdf"
                isOpen={faq4}
                onClick={() => toggleFaq("faq4")}
              />
            </div>
          </div>
        </section>
        <section
          id="sales"
          className="pr-0 h-[560px] flex flex-col md:flex-row justify-start max-w-[1440px] md:mt-52"
        >
          <InputForm />
        </section>
      </main>
    </>
  );
}
