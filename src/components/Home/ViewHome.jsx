import useFetchImage from "../../hooks/useFetchImage";
import "../../styles/loader.css";
import { NavBarHome } from "../Navbar/NavBarHome";
import { HomeInf } from "../Inf/HomeInf";

const ViewHome = () => {
  const { imageUrl, error } = useFetchImage("Background_Home.webp");

  return (
    <div
      id="home"
      className="w-screen h-screen flex flex-col bg-[#F5F5F7] relative"
    >
      {imageUrl && (
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 border-b-2 border-[#303030]"></div>
          <img
            className="w-full h-full object-cover m-0 p-0"
            src={imageUrl}
            alt="Imagen de Laboratorio del Departamento de Metal-Mecánica"
          />
        </div>
      )}
      <div className="w-full h-1/10 z-20 flex justify-center">
        <NavBarHome />
      </div>
      <div className="flex-grow flex items-center justify-center relative z-10">
        {error ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="loader"></div>
            <p className="text-gray-600 mt-4 font-bold text-center text-lg">
              Tipo de Error: {error.message}
            </p>
            <p className="text-gray-600 text-center font-medium text-">
              Error al cargar el contenido.
            </p>
          </div>
        ) : !imageUrl ? (
          <div className="flex items-center justify-center h-full">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="h-9/10 flex items-center justify-center">
            <HomeInf />
          </div>
        )}
      </div>
    </div>
  );
};

export { ViewHome };
