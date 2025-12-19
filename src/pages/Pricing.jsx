import React from "react";
import Card11 from "../assets/img/card23212.png";
import Card2 from "../assets/img/Card123.png";
import { useTranslation } from "react-i18next";
const Pricing = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white py-16">
      <div className="max-w-[1338px] mx-auto px-4">
        <h2 className="text-[40px] font-bold text-center text-black mb-20">
          {t("p1")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col">
            <div className="h-[250px] flex items-center justify-center mb-8">
              <img src={Card11} alt="Self-study" className="max-h-full" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a202c] mb-4">
              {t("p2")}
            </h3>
            <p className="text-[#718096] text-lg leading-relaxed mb-8">
              {t("p3")}
            </p>
            <div className="mt-auto">
              <span className="inline-flex items-baseline bg-[#edf2f7] px-4 py-2 rounded">
                <span className="text-xl font-bold text-[rgb(45,55,72)]">
                  £5.99
                </span>
                <span className="ml-2 text-sm text-[#718096]">{t("p4")}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="h-[250px] flex items-center justify-center mb-8">
              <img src={Card2} alt="Live classes" className="max-h-full" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a202c] mb-4">
              {t("p5")}
            </h3>
            <p className="text-[#718096] text-lg leading-relaxed mb-8">
              {t("p6")}
            </p>
            <div className="mt-auto">
              <span className="inline-flex items-baseline bg-[#edf2f7] px-4 py-2 rounded">
                <span className="text-xl font-bold text-[#2d3748]">£12.99</span>
                <span className="ml-2 text-sm text-[#718096]">{t("p4")} </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-[250px] flex items-center justify-center mb-8">
              <img src={Card11} alt="Personal Tuition" className="max-h-full" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a202c] mb-4">
              {t("p7")}
            </h3>
            <p className="text-[#718096] text-lg leading-relaxed mb-8">
              {t("p8")}
            </p>
            <div className="mt-auto">
              <span className="inline-flex items-baseline bg-[#edf2f7] px-4 py-2 rounded">
                <span className="text-xl font-bold text-[#2d3748]">£20.99</span>
                <span className="ml-2 text-sm text-[#718096]">{t("p4")} </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
