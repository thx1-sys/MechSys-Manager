import React from "react";
import PhoneIcon from "../Svg/PhoneIcon";
import MailIcon from "../Svg/MailIcon";
import useFetchImage from "../../hooks/useFetchImage";

const HomeFooter = () => {
  const { imageUrl } = useFetchImage("IMG_HOME_1.webp");

  return (
    <footer
      id="contacto"
      className="bg-black text-white py-8 border-t border-[#303030]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent mb-4">
              Contacto
            </h2>
            <p className="flex items-center mb-2 text-[#757575]">
              <PhoneIcon className="mr-2" />
              618-829-0900
            </p>
            <p className="flex items-center mb-2 text-[#757575]">
              <MailIcon className="mr-2" />
              metalmecanica@itdurango.edu.mx
            </p>
          </div>
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0 lg:pr-8">
            <h2 className="text-2xl font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent mb-4">
              Comentarios y Sugerencias
            </h2>
            <p className="mb-2 text-[#757575]">
              Si tienes comentarios sobre tu experiencia con el Sistema de
              Administración de Laboratorio o sugerencias para mejorar su
              funcionalidad, nos encantaría escucharlas. Tus opiniones son muy
              importantes para nosotros y estamos comprometidos a mejorar
              continuamente la plataforma para facilitar el trabajo de
              estudiantes y profesores en el laboratorio de Metal-Mecánica.
            </p>
          </div>

          <div className="w-full lg:w-1/3 mb-6 lg:mb-0 lg:pl-8">
            <h2 className="text-2xl font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent mb-4">
              Enlaces Útiles
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#757575] hover:text-white transition duration-300"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#757575] hover:text-white transition duration-300"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#757575] hover:text-white transition duration-300"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#757575] hover:text-white transition duration-300"
                >
                  Acerca de
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-8 pt-2">
          <div className="w-full lg:w-auto mb-4 lg:mb-0">
            <p className="text-[#757575] text-center lg:text-left">
              © 2024 MechSys Manager, ITD.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <div className="flex items-center justify-center lg:justify-end">
              {imageUrl && (
                <img
                  className="w-8 h-8 object-cover mr-2 filter grayscale"
                  src={imageUrl}
                  alt="Logo de la Página"
                />
              )}
              <span className="text-[#757575]">MechSys Manager</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { HomeFooter };
