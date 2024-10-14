import React from "react";
import { useNavigate } from "react-router-dom";
import Pakage from "../../components/Svg/Pakage";
import Tool from "../../components/Svg/Tool";
import History from "../../components/Svg/History";

const MainContentStudent = () => {
  const navigate = useNavigate();

  const handleButtonClick = (type) => {
    navigate(`/student_home/${type}`);
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 lg:px-0">
      <div className="bg-[#151515] bg-opacity-50 opacity-80 border border-[#757575] p-4 lg:p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg transform transition duration-500 hover:bg-opacity-100 hover:opacity-100 mt-8 md:mt-0">
        <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-white text-center">
          Solicitud de Laboratorio Metal-Mecánica
        </h1>
        <p className="text-center text-[#3375C8] mb-4 text-lg lg:text-xl font-semibold">
          Estudiante
        </p>
        <p className="mb-8 text-lg lg:text-xl text-center text-[#757575]">
          Elige si deseas pedir prestado material o rentar una máquina
        </p>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-4">
          <button
            className="text-white px-4 py-8 lg:py-12 rounded flex flex-col items-center w-full border border-[#757575] hover:bg-white hover:shadow-white-lg hover:text-black transform transition duration-500"
            onClick={() => handleButtonClick("borrow")}
          >
            <Pakage width="36" height="36" lg:width="48" lg:height="48" />
            <span className="mt-2 text-sm lg:text-base">
              Pedir prestado material
            </span>
          </button>
          <button
            className="text-white px-4 py-8 lg:py-12 rounded flex flex-col items-center w-full border border-[#757575] hover:bg-white hover:shadow-white-lg hover:text-black transform transition duration-500"
            onClick={() => handleButtonClick("rent")}
          >
            <Tool width="36" height="36" lg:width="48" lg:height="48" />
            <span className="mt-2 text-sm lg:text-base">
              Rentar una máquina
            </span>
          </button>
        </div>
        <p className="text-md lg:text-lg text-[#757575] py-2 text-center">
          Selecciona una opción para continuar con tu solicitud.
        </p>
      </div>

      <button className="text-white px-4 py-2 flex items-center space-x-2 mt-8 mb-8 md:mb-0 bg-[#151515] bg-opacity-50 opacity-80 border border-[#757575] rounded-lg shadow-lg backdrop-filter backdrop-blur-lg transform transition duration-500 hover:bg-opacity-100 hover:opacity-100 hover:bg-white hover:shadow-white-lg hover:text-black">
        <History width="20" height="20" lg:width="24" lg:height="24" />
        <span className="text-sm lg:text-base">Ver historial de pedidos</span>
      </button>
    </main>
  );
};

export default MainContentStudent;
