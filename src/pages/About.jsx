import React from "react";
import About_img from "../assets/img/abou.png";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-[1330px] mx-auto px-4">
      <div className="flex items-center justify-between">
        <div className="left flex flex-col items-start w-1/2">
          <h1 className="font-semibold mb-[40px] text-[48px] leading-[80px] tracking-normal">
            {t("about1")}
          </h1>
          <p className="font-normal text-[20px] mb-[40px] leading-[100%] tracking-normal text-shadow-gray-400">
            {t("about2")}
          </p>
          <div className="flex items-center gap-[100px]">
            <div className="flex items-center flex-col">
              <p className="font-semibold text-[48px] leading-[80px] tracking-normal">
                800
              </p>
              <p className="font-normal text-[20px] leading-[100%] tracking-normal">
                {t("about3")}
              </p>
            </div>
            <div className="flex items-center flex-col">
              <p className="font-semibold text-[48px] leading-[80px] tracking-normal">
                18
              </p>
              <p className="font-normal text-[20px] leading-[100%] tracking-normal">
                {t("about4")}
              </p>
            </div>
            <div className="flex items-center flex-col">
              <p className="font-semibold text-[48px] leading-[80px] tracking-normal">
                6
              </p>
              <p className="font-normal text-[20px] leading-[100%] tracking-normal">
                {t("about5")}
              </p>
            </div>
          </div>
        </div>
        <div className="right w-1/2">
          <img src={About_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
