import React from "react";
import Settings from "../../components/Svg/Settings";
import History from "../../components/Svg/History";
import Exit from "../../components/Svg/Exit";
import Moon from "../../components/Svg/Moon";
import Sun from "../../components/Svg/Sun";

const HeaderStudent = ({
  logoUrl,
  profileImageRef,
  toggleProfileMenu,
  isProfileMenuOpen,
  profileMenuRef,
  toggleDarkMode,
  darkMode,
}) => {
  return (
    <header className="h-1/10 w-full flex items-center justify-between px-4 lg:px-8 mt-4 relative">
      <div className="flex items-center">
        {logoUrl && (
          <a href="/">
            <img
              className="w-12 h-12 lg:w-16 lg:h-16 object-cover mr-2 lg:mr-4 opacity-50 hover:opacity-100 transform transition duration-500"
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
          className="bg-gray-400 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center cursor-pointer"
          onClick={toggleProfileMenu}
        >
          <img
            src="https://via.placeholder.com/150"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      {isProfileMenuOpen && (
        <div
          ref={profileMenuRef}
          className="absolute right-0 mt-16 w-48 bg-[#151515] bg-opacity-90 text-lg border border-[#757575] rounded-lg shadow-lg z-10 text-white"
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
            className="block p-4 hover:bg-white hover:text-red-600 rounded-b-lg flex items-center transform transition duration-500 border-t mt-2 border-[#757575]"
          >
            <Exit width="20" height="20" className="mr-2" />
            Salir
          </a>
        </div>
      )}
    </header>
  );
};

export default HeaderStudent;
