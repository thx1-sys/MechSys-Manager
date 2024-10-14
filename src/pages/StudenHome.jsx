import React, { useState, useEffect, useRef } from "react";
import History from "../components/Svg/History";
import Settings from "../components/Svg/Settings";
import Exit from "../components/Svg/Exit";
import Moon from "../components/Svg/Moon";
import Sun from "../components/Svg/Sun";
import useFetchImage from "../hooks/useFetchImage";
import MainContentStudent from "../components/Main/MainContentStudent";

const StudentHome = () => {
  const { imageUrl: logoUrl } = useFetchImage("Logo_ITD.png");
  const { imageUrl: footerLogoUrl } = useFetchImage("IMG_HOME_1.webp");
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const profileMenuRef = useRef(null);
  const profileImageRef = useRef(null);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target) &&
      !profileImageRef.current.contains(event.target)
    ) {
      setIsProfileMenuOpen(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="background-login h-auto w-screen flex flex-col">
      <header className="h-1/10 w-full flex items-center justify-between px-4 lg:px-8 mt-4">
        <div className="flex items-center">
          {logoUrl && (
            <a href="/">
              <img
                className="w-12 h-12 lg:w-16 lg:h-16 object-cover mr-2 lg:mr-4 opacity-50 hover:opacity-100 hover:scale-105 transform transition duration-500"
                src={logoUrl}
                alt="Logo del ITD"
              />
            </a>
          )}
        </div>
        <div className="relative flex items-center text-white">
          <div className="mr-2 lg:mr-4 text-right">
            <p className="text-sm lg:text-md">Juan Perez</p>
            <p className="text-gray-400 text-xs lg:text-sm">Estudiante</p>
          </div>
          <div
            ref={profileImageRef}
            className="bg-gray-400 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center cursor-pointer transform transition duration-500 hover:scale-105"
            onClick={toggleProfileMenu}
          >
            <img
              src="https://via.placeholder.com/150"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </header>

      {isProfileMenuOpen && (
        <div
          ref={profileMenuRef}
          className="absolute right-0 mt-24 mb-4 mr-8 w-48 bg-[#151515] bg-opacity-90 text-lg border border-[#757575] rounded-lg shadow-lg z-10 text-white"
        >
          <a
            href="#"
            className="block p-4 hover:bg-white rounded-t-lg hover:text-[#757575] flex items-center transform transition duration-500"
          >
            <Settings width="20" height="20" className="mr-2" />
            Ajustes
          </a>
          <a
            href="#"
            className="block p-4 hover:bg-white hover:text-[#757575] flex items-center transform transition duration-500"
          >
            <History width="20" height="20" className="mr-2" />
            Historial
          </a>

          <button
            className="block p-4 hover:bg-white hover:text-[#757575] flex items-center transform transition duration-500 w-full"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <Sun width="20" height="20" className="mr-2" />
            ) : (
              <Moon width="20" height="20" className="mr-2" />
            )}
            {darkMode ? "Modo Claro" : "Modo Oscuro"}
          </button>
          <a
            href="#"
            className="block p-4 hover:bg-white hover:text-red-600 rounded-b-lg flex items-center transform transition duration-500 border-t  border-[#757575]"
          >
            <Exit width="20" height="20" className="mr-2" />
            Salir
          </a>
        </div>
      )}

      <MainContentStudent />

      <footer className="bg-black text-white py-2 lg:py-4 border-t border-[#303030]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full lg:w-auto mb-2 lg:mb-0">
              <p className="text-[#757575] text-center lg:text-left text-xs lg:text-sm">
                © 2024 MechSys Manager, ITD.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <div className="flex items-center justify-center lg:justify-end">
                {footerLogoUrl && (
                  <img
                    className="w-4 h-4 lg:w-6 lg:h-6 object-cover mr-1 lg:mr-2 filter grayscale"
                    src={footerLogoUrl}
                    alt="Logo de la Página"
                  />
                )}
                <span className="text-[#757575] text-xs lg:text-sm">
                  MechSys Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentHome;
