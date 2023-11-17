'use client';
import { StoreDownloadButton } from '@/components/CustomButtons';
import useIsMobile from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function Home() {
  const isMobile = useIsMobile();
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

      <section className="pr-0  min-h-[600px] flex flex-col md:flex-row justify-center pl-0 pt-16 pb-16 bg-lighterGreen">
        {/* margin, padding 고쳤음 */}
        {isMobile ? (
          <div></div>
        ) : (
          <div className="">
            <h3 className="text-center md:text-h4 text-b2 font-bold text-lightGreen mb-3">
              내 정보는 안전하게
            </h3>
            <h1 className="text-center text-t2 font-bold  mb-6">
              최신 기술이 적용된 강력한 보안
            </h1>
            <p className="text-center text-b2 leading-normal mb-6">
              <p className="text-darkGreen inline"> CLASSIFY</p>는 끊임없는
              업데이트로 빈틈없는 보안 환경을 제공합니다. <p></p>
              안심하고 오늘의 할 일에만 집중하세요.
            </p>
            <div className="flex flex-row items-center">
              <div className="flex flex-col items-start ">
                <button className="flex flex-col h-52 w-80 bg-lightGreen shadow-2xl rounded-3xl p-10">
                  <p className="font-bold text-white text-h3 mb-3">
                    세이프 브라우징
                  </p>
                  <p className="text-b2 text-left leading-tight text-slate-300">
                    헷갈리는 위조 사이트로 인한 걱정은 이제 그만, 네이버 웨일이
                    미리 판단하여 알려줍니다.
                  </p>
                </button>
                <button className="p-8 font-bold text-black text-h4 ">
                  악성 프로그램 차단
                </button>
                <button className="p-8 font-bold text-black text-h4 ">
                  클린 웹
                </button>
                <button className="p-8 font-bold text-black text-h4 ">
                  마이 액티비티
                </button>
              </div>
              <Image
                src="/img/app-profile.png"
                alt="임시 이미지"
                width={390}
                height={500}
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
