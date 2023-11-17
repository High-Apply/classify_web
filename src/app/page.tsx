'use client';
import { StoreDownloadButton } from '@/components/CustomButtons';
import useIsMobile from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
export default function Home() {
  const isMobile = useIsMobile();
  const [popup, setPopup] = useState({
    btn1: true,
    btn2: false,
    btn3: false,
    btn4: false,
  });

  const { btn1, btn2, btn3, btn4 } = popup;

  function onClickButton(e: any) {
    setPopup({
      ...popup,
    });
  }
  return (
    <main className="pt-32 md:pt-48">
      <section className="pr-0 h-[560px] flex flex-col md:flex-row justify-start max-w-[1440px] md:pl-28 pl-0">
        {isMobile ? (
          <div className="md:w-1/2 w-[92%] flex flex-col my-0 mx-auto">
            <h3 className="md:text-h4 text-b2 font-bold text-lightGreen mb-3">
              나만의 스마트한 브라우저
            </h3>
            <h1 className="md:text-t2 text-h2 leading-normal font-bold max-w-[600px] mb-5">
              클래시파이로 일상을 바꿔보세요.
            </h1>
            <p className="md:text-b2 text-b3 leading-normal">
              더 가볍게, 더 편하게, 내 일상에 딱 맞는 브라우저가 여기 있습니다.
              새로운 인터넷으로 하루를 열어 보세요. 작지만 큰 변화가 시작됩니다.
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
        ) : (
          <div className="md:w-1/2 w-full flex flex-col pr-10">
            <h3 className="text-h4 font-bold text-lightGreen mb-3">
              나만의 스마트한 브라우저
            </h3>
            <h1 className="text-t2 font-bold max-w-[600px] mb-6">
              클래시파이로 일상을 바꿔보세요.
            </h1>
            <p className="text-b2 leading-normal">
              더 가볍게, 더 편하게, 내 일상에 딱 맞는 브라우저가 여기 있습니다.
              새로운 인터넷으로 하루를 열어 보세요. 작지만 큰 변화가 시작됩니다.
            </p>
            <div className="text-center flex flex-row items-start mt-10 w-full">
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
        )}
        <div className="flex items-start justify-center md:w-1/2 w-full relative mt-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/img/rocket.jpg"
              width={300}
              height={300}
              alt="BLOWING ROCKET"
            />
          </motion.div>
        </div>
      </section>

      <section className="pr-0 h-[560px] flex flex-col md:flex-row justify-start max-w-[1440px] md:pl-28 pl-0">
        {isMobile ? (
          <div className="md:w-1/2 w-[92%] flex flex-col my-0 mx-auto">
            <h3 className="md:text-h4 text-b2 font-bold text-lightGreen mb-3">
              나만의 스마트한 브라우저
            </h3>
            <h1 className="md:text-t2 text-h2 leading-normal font-bold max-w-[600px] mb-5">
              클래시파이로 일상을 바꿔보세요.
            </h1>
            <p className="md:text-b2 text-b3 leading-normal">
              더 가볍게, 더 편하게, 내 일상에 딱 맞는 브라우저가 여기 있습니다.
              새로운 인터넷으로 하루를 열어 보세요. 작지만 큰 변화가 시작됩니다.
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
        ) : (
          <div className="h-[560px] flex flex-row overflow-hidden">
            <Image
              src="/img/app-timetable2.png"
              width={340}
              height={460}
              alt="앱 시간표 화면"
              className="object-cover object-top"
            />
            <div className="md:w-1/2 w-full flex flex-col pr-10">
              <h3 className="text-h4 font-bold text-lightGreen mb-3">
                시간표 · 공유 캘린더
              </h3>
              <h1 className="text-t2 font-bold max-w-[600px] mb-6">
                손쉬운 일정 관리
              </h1>
              <p className="text-b2 leading-normal">
                더 가볍게, 더 편하게, 내 일상에 딱 맞는 브라우저가 여기
                있습니다. 새로운 인터넷으로 하루를 열어 보세요. 작지만 큰 변화가
                시작됩니다.
              </p>
            </div>
          </div>
        )}
      </section>

      <section className="pr-0  min-h-[600px] flex flex-col md:flex-row justify-center pl-0 pt-8 bg-lighterGreen ">
        {/* margin, padding 고쳤음 */}
        {isMobile ? (
          <div></div>
        ) : (
          <div className="">
            <h3 className="text-center md:text-h4 text-b2 font-bold text-lightGreen mb-3">
              내 정보는 안전하게
            </h3>
            <h1 className="text-center text-t2 font-bold mb-6">
              최신 기술이 적용된 강력한 보안
            </h1>
            <p className="text-center text-b2 leading-normal mb-6">
              <p className="text-darkGreen inline"> CLASSIFY</p>는 끊임없는
              업데이트로 빈틈없는 보안 환경을 제공합니다. <p></p>
              안심하고 오늘의 할 일에만 집중하세요.
            </p>
            <div className="flex flex-row items-center">
              <div className="flex flex-col items-start mr-14">
                <button className="flex flex-col h-36 w-64 bg-lightGreen shadow-2xl rounded-3xl p-8">
                  <p className="font-bold text-white text-b1 mb-3">
                    시간표 관리
                  </p>
                  <p className="text-b3 text-left leading-tight text-gray-300">
                    한 눈에 들어오는 시간표와 캘린더 기능으로 간편한 일정 관리가
                    가능해집니다.
                  </p>
                </button>
                <button className="p-6 font-bold text-black text-b1 ">
                  개별화된 진로 정보 제공
                </button>
                <button className="p-6 font-bold text-black text-b1 ">
                  선택 과목 안내
                </button>
                <button className="p-6 font-bold text-black text-b1 ">
                  수업 정보와 수강평 제공
                </button>
              </div>
              <div className="overflow-hidden">
                <Image
                  src="/img/app-profile.png"
                  alt="앱 화면"
                  width={340}
                  height={300}
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
