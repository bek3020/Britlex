import React from "react";
import Logo from "../assets/svg/Britlex.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="pt-[55px] pl-[131px] pr-[131px]">
      <div className="w-full max-w-[1338px] mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <nav className="flex items-center gap-[20px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              Pricing
            </NavLink>

            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              Contacts
            </NavLink>
          </nav>
        </div>
      </div>
      ;
    </header>
  );
};

export default Header;
