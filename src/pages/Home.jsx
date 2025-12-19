import React from "react";
import Banner from "../assets/img/banner.png";
import { useTranslation } from "react-i18next";
import Card1 from "../assets/img/card1.png";
import Card2 from "../assets/img/card2.png";
import Card3 from "../assets/img/card3.png";
import Card4 from "../assets/img/card4.png";
import About from "./About";
import Contact from "./Contact";
import Pricing from "./Pricing";
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
      <div className="skills">
        <div class="max-w-6xl mx-auto">
          <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-[#f5f5f5] p-8 rounded-2xl flex flex-col h-full">
                <div className="mb-6">
                  <img
                    src={Card1}
                    alt="Speaking"
                    className="mx-auto h-48 object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-[#2c3338]">
                  Speaking
                </h2>
                <div className="text-gray-500 text-sm space-y-4 mb-8">
                  <p>{t("skills1")}</p>
                  <p>{t("skills1")}</p>
                </div>
                <button className="mt-auto bg-[#2c3338] text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition w-max">
                  {t("skills2")}
                </button>
              </div>
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#f5f5f5] p-8 rounded-2xl flex flex-col">
                    <div className="mb-6">
                      <img
                        src={Card2}
                        alt="Writing"
                        className="mx-auto h-32 object-contain"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-[#2c3338]">
                      {t("skills3")}
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">{t("skills4")}</p>
                    <button className="mt-auto bg-[#2c3338] text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition w-max">
                      {t("skills2")}
                    </button>
                  </div>

                  <div className="bg-[#f5f5f5] p-8 rounded-2xl flex flex-col">
                    <div className="mb-6">
                      <img
                        src={Card3}
                        alt="Reading"
                        className="mx-auto h-32 object-contain"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-[#2c3338]">
                      {t("skills5")}
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">{t("skills6")}</p>
                    <button className="mt-auto bg-[#2c3338] text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition w-max">
                      {t("skills2")}
                    </button>
                  </div>
                </div>
                <div className="bg-[#f5f5f5] p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1 text-left">
                    <h2 className="text-2xl font-bold mb-4 text-[#2c3338]">
                      {t("skills6")}
                    </h2>
                    <p className="text-gray-500 text-sm mb-6 max-w-sm">
                      {t("skills7")}
                    </p>
                    <button className="bg-[#2c3338] text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition w-max">
                      {t("skills2")}
                    </button>
                  </div>
                  <div className="flex-1 flex justify-end">
                    <img
                      src={Card4}
                      alt="Listening"
                      className="w-full max-h-44 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
