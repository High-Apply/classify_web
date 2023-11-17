import { useState } from "react";
import CustomInput, { inputType } from "../CustomInput";
export default function InputForm() {
  const [popup, setPopup] = useState(false);
  return (
    <div className="flex md:flex-1 md:flex-row items-center justify-center flex-col w-full">
      <div className="w-44"></div>
      <div className="md:w-1/2 w-[95%] flex flex-col gap-4 mb-8 md:mb-0">
        <h2 className="md:text-t2 text-h3 font-bold text-left mb-9">
          Contact Us
        </h2>
        <div>
          <h3 className="text-b2 font-bold leading-normal">기업명/대표자</h3>
          <p className="text-b2 mb-5">HighApply/표준성</p>
        </div>
        <div>
          <h3 className="text-b2 font-bold leading-normal">연락처</h3>
          <p className="text-b2 mb-5">010-2078-9868</p>
        </div>
        <div>
          <h3 className="text-b2 font-bold leading-normal">주소</h3>
          <p className="text-b2 mb-5">
            서울 성동구 왕십리로 222-1 한양대학부속병원
          </p>
        </div>
      </div>
      <form className="md:w-1/2 w-[95%] flex flex-col gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <CustomInput
            id="school"
            labelName="학교(기업)명"
            placeholder="갈매고등학교"
            required
            type={inputType.text}
          />
          <CustomInput
            id="responsibility"
            labelName="대표자 및 담당자명"
            placeholder="표준성"
            required
            type={inputType.text}
          />
        </div>
        <CustomInput
          id="phone"
          labelName="휴대전화"
          placeholder="010-1234-5678"
          required
          type={inputType.phone}
        />
        <CustomInput
          id="email"
          labelName="이메일"
          placeholder="john@gmail.com"
          required
          type={inputType.email}
        />
        <div className="flex items-start mb-6">
          <div className="flex flex-row items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <button
              onClick={() => setPopup(!popup)}
              className="text-green-600 hover:underline dark:text-green-500"
            >
              terms and conditions
            </button>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-lightGreen hover:bg-darkGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          문의하기
        </button>
      </form>
    </div>
  );
}
