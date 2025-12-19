import React from "react";
import Contact_i from "../assets/img/contact.png";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full max-w-[1338px] mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={Contact_i}
          alt="Contact illustration"
          className="w-full max-w-sm h-auto"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t("contact1")}
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
          {t("contact2")}
        </p>

        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter Your E-mail"
            className="flex-1 px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-600"
          />
          <button
            type="submit"
            className="bg-[#263238] text-white px-10 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg"
          >
            {t("contact3")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
