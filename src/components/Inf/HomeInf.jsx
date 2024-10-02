import React from "react";
import { useNavigate } from "react-router-dom";
import useFetchImage from "../../hooks/useFetchImage";
import "../../styles/loader.css";

const HomeInf = () => {
  const { imageUrl } = useFetchImage("IMG_HOME_1.webp");
  const navigate = useNavigate();

  const handleScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    const offset = -50; // Ajusta este valor según sea necesario
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = section.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Usar history.replaceState para ocultar el fragmento de la URL
    history.replaceState(null, null, " ");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="w-screen flex items-center justify-center relative font-inter">
      {imageUrl && (
        <div className="flex w-full px-20 h-full rounded-lg overflow-hidden">
          <div className="w-8/10 p-8 flex flex-col justify-center text-white">
            <h1 className="text-5xl font-bold mb-4 typing-effect">
              MechSys Manager
            </h1>
            <p className="text-md font-light mb-6 opacity-60">
              Bienvenido al Sistema de Administración de Laboratorio del
              Departamento de Metal-Mecánica. Esta plataforma facilita la
              gestión de inventarios, reservación de equipos y control de
              préstamos, asegurando un manejo eficiente de los recursos del
              laboratorio para estudiantes y profesores.
            </p>
            <button
              className="w-4/10 bg-[#150E1C] px-4 py-2 text-[#7E54A6] font-inter rounded-xl hover:bg-[#7E54A6] hover:text-[#150E1C] hover:shadow-purple-lg transform transition duration-500 text-lg border border-[#7E54A6]"
              onClick={handleLoginClick}
            >
              Ingresar
            </button>
            <a
              href="#info"
              className="w-4/10 text-center mt-4 border border-white/50 px-4 py-2 text-white font-inter rounded-xl hover:bg-gray-200 hover:text-black transform transition duration-500 text-sm opacity-50 hover:opacity-100 hover:shadow-white-lg border-b-2 border-white"
              onClick={(e) => handleScroll(e, "info")}
            >
              Más información
            </a>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <img
              className="w-20/24 object-cover filter grayscale transition duration-500 hover:scale-110 hover:-rotate-2 opacity-80 hover:opacity-100"
              src={imageUrl}
              alt="Imagen de Laboratorio del Departamento de Metal-Mecánica"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export { HomeInf };
