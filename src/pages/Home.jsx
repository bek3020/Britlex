import React from "react";
import Banner from "../assets/img/banner.png";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-[1338px] mx-auto px-4">
      <div className="flex items-center justify-between ">
        <div className="left w-1/2 p-3 flex flex-col items-start">
          <h1 className=" font-semibold mb-[40px] text-[64px] leading-[80px] tracking-normal">
            {t("banner1")}
          </h1>
          <p className="font-normal mb-[40px] text-gray-400 text-[24px] leading-[100%] tracking-normal">
            With our teachers who write a program for <br /> each student, you
            will be able to make your <br /> first sketch after the first
            lesson.
          </p>
          <button className="w-[400px] h-[100px] rounded-[20px] bg-gray-800">
            <span className="font-normal text-amber-50 text-[36px] leading-[100%] tracking-normal">
              Get started
            </span>
          </button>
        </div>
        <div className="right w-1/2">
          <img src={Banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
