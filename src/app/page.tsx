import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative w-full overflow-hidden">
        <div className="w-auto h-screen relative">
          <Image
            src="/img/new_main.png"
            alt="new main"
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-[rgba(255,255,255,0)]"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center flex-col justify-between">
          <div className="mt-44 flex items-center flex-col justify-start">
            <h1 className="text-t1 text-center w-full mb-12">
              금융의 모든 것 토스에서 쉽게 간편하게
            </h1>
          </div>
        </div>
        <div className="relative flex justify-start flex-col py-52 px-0 bg-[#f9fafb]">
          <p className="text-h3 font-bold text-center mb-14 leading-10">
            내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요. 이제껏
            경험 못 했던 쉽고 편리한 금융 서비스, 토스와 함께라면 당신의 일상이
            새로워질 거예요.
          </p>
        </div>
      </section>
    </main>
  );
}
