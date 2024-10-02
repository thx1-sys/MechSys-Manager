import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [isPolicyVisible, setIsPolicyVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "true", { expires: 30 });
    setShowConsent(false);
  };

  const handleReject = () => {
    setShowConsent(false);
  };

  const handlePolicyClick = (event) => {
    event.preventDefault();
    setIsPolicyVisible(true);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black opacity-60 text-white p-4 flex flex-col md:flex-row justify-between items-center transform transition duration-500 hover:opacity-90 z-50">
      <p className="mb-2 md:mb-0">
        Este sitio utiliza cookies para mejorar la experiencia del usuario.{" "}
        <a href="#" onClick={handlePolicyClick} className="underline">
          Lee nuestras políticas de cookies
        </a>
        .
      </p>
      <div className="flex space-x-2">
        <button
          onClick={handleReject}
          className="bg-[#3B0F0F] cursor-pointer px-6 py-2 text-[#FF0000] font-inter rounded-xl hover:bg-[#FF0000] hover:text-[#3B0F0F] hover:shadow-red-lg transform transition duration-500 text-md border border-[#FF0000]"
        >
          Cancelar
        </button>
        <button
          onClick={handleAccept}
          className="bg-[#0A170D] cursor-pointer px-6 py-2 text-[#3E9055] font-inter rounded-xl hover:bg-[#3E9055] hover:text-[#0A170D] hover:shadow-green-lg transform transition duration-500 text-md border border-[#3E9055]"
        >
          Aceptar
        </button>
      </div>
      {isPolicyVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg mx-auto text-black">
            <h2 className="text-xl font-bold mb-4">Políticas de Cookies</h2>
            <p className="mb-4">
              En el Instituto Tecnológico de Durango utilizamos cookies para
              asegurar que te damos la mejor experiencia en nuestro sitio web.
              Al continuar navegando en este sitio, aceptas el uso de cookies de
              acuerdo con nuestras políticas de cookies.
            </p>
            <h3 className="text-lg font-semibold mb-2">
              ¿Qué son las cookies?
            </h3>
            <p className="mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu
              dispositivo (ordenador, smartphone, tablet, etc.) cuando visitas
              ciertos sitios web. Estos archivos permiten que el sitio web
              recuerde tus acciones y preferencias (como inicio de sesión,
              idioma, tamaño de fuente y otras preferencias de visualización)
              durante un periodo de tiempo.
            </p>
            <h3 className="text-lg font-semibold mb-2">
              Tipos de cookies que utilizamos
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                Cookies esenciales: Son necesarias para el funcionamiento del
                sitio web.
              </li>
              <li>
                Cookies de rendimiento: Recopilan información sobre cómo los
                visitantes usan nuestro sitio web.
              </li>
              <li>
                Cookies funcionales: Permiten al sitio web recordar las
                elecciones que realizas.
              </li>
              <li>
                Cookies de análisis: Utilizamos estas cookies para entender
                mejor el comportamiento de nuestros usuarios.
              </li>
              <li>
                Cookies de publicidad: Estas cookies se utilizan para hacer que
                la publicidad sea más relevante para ti.
              </li>
            </ul>
            <button
              onClick={() => setIsPolicyVisible(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { CookieConsent };
