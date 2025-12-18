import React from "react";
import Logo from "../assets/svg/Britlex.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  function handleSelect(e) {
    i18n.changeLanguage(e.target.value);
  }
  return (
    <header className="pt-[55px] pl-[131px] pr-[131px]">
      <div className="w-full max-w-[1338px] mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>

          <nav className="flex items-center gap-[20px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              {t("header1")}
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              {t("header2")}
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              {t("header3")}
            </NavLink>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              {t("header4")}
            </NavLink>

            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              {t("header5")}
            </NavLink>
          </nav>
          <div className="flex items-center gap-[10px]">
            <select onChange={handleSelect}>
              <option value="uz">UZ</option>
              <option value="ru">RUS</option>
              <option value="en">ENG</option>
            </select>
          </div>
          <button className="border-3 rounded-[5px] p-3 w-[220px] h-[70] cursor-pointer">
            <span className="font-normal text-[24px] leading-[100%] tracking-normal">
              {t("header6")}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
