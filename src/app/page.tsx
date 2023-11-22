/* eslint-disable @next/next/no-img-element */
"use client";
import { StoreDownloadButton } from "@/components/CustomButtons";
import InputForm from "@/components/main/input-form";
import useIsMobile from "@/hooks/useMediaQuery";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  const isMobile = useIsMobile();
  const images = [
    "/img/timetable_week.png",
    "/img/timetable_every.png",
    "/img/timetable_share_calendar.png",
  ];
  return (
    <>
      <div id="top"></div>
      <main className="pt-32 md:pt-44 max-w-8xl">
        <section className="pr-0 h-[560px] flex flex-col md:flex-row justify-start md:pl-28 pl-0">
          <div className="md:w-1/2 w-[92%] flex flex-col md:pr-10 my-0 mx-auto">
            <h3 className="md:text-h4 text-b2 font-bold text-lightGreen mb-3">
              새로운 교육, 새로운 어플리케이션
            </h3>
            <h1 className="md:text-t2 text-h2 leading-normal font-bold max-w-[600px] mb-6">
              클래시파이로 일상을 바꿔보세요.
            </h1>
            <p className="md:text-b2 text-b3 leading-normal">
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
              width={280}
            >
              <img src={"/img/timetable_week.png"} alt={`주간 시간표`} />
              <img src={"/img/timetable_every.png"} alt={`일일 시간표`} />
              <img src={"/img/share_calendar.png"} alt={`공유 캘린더`} />
            </Carousel>
          </div>
        </section>
        <section
          id="sales"
          className="pr-0 h-[560px] flex flex-col md:flex-row justify-start max-w-[1440px]"
        >
          <InputForm />
        </section>
      </main>
    </>
  );
}
