import React from "react";
import NavLinks from "./NavLinks";

const MobileMenu = ({
  isMobileMenuOpen,
  activeSection,
  handleScroll,
  handleLoginClick,
  linkClasses,
}) => {
  if (!isMobileMenuOpen) return null;

  return (
    <div className="md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-black/80 bg-opacity-50 backdrop-blur-lg p-4 rounded-lg overflow-y-auto flex flex-col justify-between">
      <ul className="flex flex-col space-y-2">
        <NavLinks
          activeSection={activeSection}
          handleScroll={handleScroll}
          linkClasses={linkClasses}
        />
      </ul>
      <div className="mt-4 flex justify-center">
        <a
          className={`bg-[#0A170D] cursor-pointer w-full text-center py-3 text-[#3E9055] font-inter rounded-xl hover:bg-[#3E9055] hover:text-[#0A170D] hover:shadow-green-lg transform transition duration-500 text-xl border border-[#3E9055] ${
            activeSection === "ingresar" ? "bg-[#3E9055] text-[#0A170D]" : ""
          }`}
          onClick={handleLoginClick}
        >
          Ingresar
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
