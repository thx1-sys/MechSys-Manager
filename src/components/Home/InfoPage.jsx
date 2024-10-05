import "../../styles/loader.css";
import { KeyFeatures } from "../Content/KeyFeatures";
import { Link } from "react-router-dom";

const InfoPage = () => {
  const handleScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    const offset = -50;
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

  return (
    <div
      id="info"
      className="w-screen min-h-screen flex flex-col items-center bg-gradient-to-b from-[#000000] via-[#101010] to-[#202020]"
    >
      <div className="w-11/12 lg:w-20/24 mt-20 flex flex-col items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="text-[#7D7D7D] w-full text-xl md:text-2xl lg:text-4xl col-span-1 lg:col-span-2">
            <h2>
              <span className="font-extrabold text-white">MechSys Manager</span>{" "}
              es el sistema de administración para laboratorios de
              Metal-Mecánica. Utilizado por los departamentos más avanzados,
              optimiza la gestión de inventarios, la reservación de equipos y el
              seguimiento de préstamos, mejorando la organización y el uso de
              recursos.
            </h2>
          </div>
          <div className="w-full flex items-center justify-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center w-full">
              <li className="h-12 w-full">
                <Link
                  to="/signup"
                  className="w-full h-full flex items-center justify-center bg-[#1E1105] text-[#B1651E] font-inter rounded-xl hover:bg-[#B1651E] hover:text-[#1E1105] hover:shadow-orange-lg transform transition duration-500 text-xl border border-[#B1651E]"
                >
                  Comenzar
                </Link>
              </li>
              <li className="h-12 w-full">
                <a
                  href="#KeyFeatures"
                  className="w-full h-full flex items-center justify-center bg-[#091422] text-[#3375C8] font-inter rounded-xl hover:bg-[#3375C8] hover:text-[#091422] hover:shadow-blue-lg transform transition duration-500 text-xl border border-[#3375C8]"
                  onClick={(e) => handleScroll(e, "KeyFeatures")}
                >
                  Ver más
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full mt-8" id="KeyFeatures">
          <KeyFeatures />
        </div>
      </div>
    </div>
  );
};

export { InfoPage };
