import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import History from "../Svg/History";
import Settings from "../Svg/Settings";
import Exit from "../Svg/Exit";
import Moon from "../Svg/Moon";
import Sun from "../Svg/Sun";
import useFetchImage from "../../hooks/useFetchImage";

const BorrowForm = () => {
  const navigate = useNavigate();
  const { imageUrl: logoUrl } = useFetchImage("Logo_ITD.png");
  const { imageUrl: footerLogoUrl } = useFetchImage("IMG_HOME_1.webp");

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [step, setStep] = useState(1); // Para manejar los pasos del formulario

  const profileMenuRef = useRef(null);
  const profileImageRef = useRef(null);

  const toggleProfileMenu = () => setIsProfileMenuOpen((prev) => !prev);

  const handleClickOutside = (event) => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target) &&
      !profileImageRef.current.contains(event.target)
    ) {
      setIsProfileMenuOpen(false);
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="background-login h-auto w-screen flex flex-col">
      {/* Header con logo y perfil */}
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
        {/* Menú de perfil */}
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

      {/* Formulario de varios pasos */}
      <div className="bg-[#151515] bg-opacity-50 opacity-80 border border-[#757575] p-4 lg:p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg transform transition duration-500 mt-8 md:mt-0">
        <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-white text-center">
          Formulario de Préstamo - Paso {step}
        </h1>

        <form>
          {step === 1 && (
            <div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Nombre"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Correo Electrónico
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Correo Electrónico"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="mat"
                >
                  Materia
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="mat"
                  type="text"
                  placeholder="Materia"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="Practica"
                >
                  Práctica
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Practica"
                  type="text"
                  placeholder="Práctica"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="dropdown-equipos"
                >
                  Equipo
                </label>
                <select
                  id="dropdown-equipos"
                  className="form-select block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                >
                  <option>Equipo 1</option>
                  <option>Equipo 2</option>
                  <option>Equipo 3</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="duracion"
                >
                  Duración de la práctica
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="duracion"
                  type="text"
                  placeholder="Duración"
                />
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-4">
            {step > 1 && (
              <button
                type="button"
                className="bg-gray-500 text-white py-2 px-4 rounded"
                onClick={prevStep}
              >
                Anterior
              </button>
            )}
            {step < 3 && (
              <button
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={nextStep}
              >
                Siguiente
              </button>
            )}
            {step === 3 && (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enviar
              </button>
            )}
          </div>
        </form>
      </div>

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

export default BorrowForm;
