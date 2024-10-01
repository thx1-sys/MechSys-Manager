import React, { useState, useEffect } from "react";
import useFetchImage from "../../hooks/useFetchImage";

const NavBarHome = () => {
  const { imageUrl } = useFetchImage("Logo_ITD.png");
  const [activeSection, setActiveSection] = useState("");

  const linkClasses =
    "text-[#B4B4B8] opacity-50 text-xl font-medium hover:opacity-90 transform transition duration-500 px-4 py-2 rounded-md image-with-white-glow";

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
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "info", "equipos", "contacto", "ingresar"];
      const scrollPosition = window.scrollY + 60; // Ajusta este valor según sea necesario

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!imageUrl) return null;

  return (
    <div className="fixed top-0 left-0 w-full px-20 h-24 pb-4 grid bg-black/50 transform transition duration-500 border-b-2 border-[#303030] z-50 hover:bg-black/80 backdrop-blur-md backdrop-brightness-125">
      <div className="grid grid-cols-6 mt-4">
        <div className="col-span-2 flex items-center">
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            <img
              className="w-16 opacity-50 hover:opacity-90 hover:scale-105 transform transition duration-500 image-with-white-glow"
              src={imageUrl}
              alt="Escudo del Instituto Tecnológico De Durango"
            />
          </a>
        </div>
        <div className="col-span-2">
          <ul className="w-full h-full flex space-x-4 justify-center items-center">
            <li>
              <a
                href="#home"
                className={`text-white opacity-50 text-xl hover:opacity-90 transform transition duration-500 px-4 py-2 rounded-md image-with-white-glow ${
                  activeSection === "home" ? "text-[#3E9055] opacity-100" : ""
                }`}
                onClick={(e) => handleScroll(e, "home")}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#info"
                className={`${linkClasses} ${
                  activeSection === "info" ? "text-[#3E9055] opacity-100" : ""
                }`}
                onClick={(e) => handleScroll(e, "info")}
              >
                Información
              </a>
            </li>
            <li>
              <a
                href="#equipos"
                className={`${linkClasses} ${
                  activeSection === "equipos"
                    ? "text-[#3E9055] opacity-100"
                    : ""
                }`}
                onClick={(e) => handleScroll(e, "equipos")}
              >
                Equipos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className={`${linkClasses} ${
                  activeSection === "contacto"
                    ? "text-[#3E9055] opacity-100"
                    : ""
                }`}
                onClick={(e) => handleScroll(e, "contacto")}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2">
          <ul className="w-full h-full flex space-x-4 justify-end items-center">
            <li>
              <a
                className={`bg-[#0A170D] px-6 py-2 text-[#3E9055] font-inter rounded-xl hover:bg-[#3E9055] hover:text-[#0A170D] hover:shadow-green-lg transform transition duration-500 text-md border border-[#3E9055] ${
                  activeSection === "ingresar"
                    ? "bg-[#3E9055] text-[#0A170D]"
                    : ""
                }`}
                onClick={(e) => handleScroll(e, "ingresar")}
              >
                Ingresar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { NavBarHome };
{
  /* <li>
              <a
                href="#"
                className="bg-[#1E1105] px-4 py-1 text-[#B1651E] font-inter rounded-xl hover:bg-[#B1651E] hover:text-[#1E1105] hover:shadow-orange-lg transform transition duration-500 text-sm"
              >
                Docentes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-[#0A170D] px-4 py-1 text-[#3E9055] font-inter rounded-xl hover:bg-[#3E9055] hover:text-[#0A170D] hover:shadow-green-lg transform transition duration-500 text-sm"
              >
                Administración
              </a>
            </li> */
}
{
  /* <li>
              <a
                href="#"
                className="bg-[#091422] px-6 py-2 text-[#3375C8] font-inter rounded-xl hover:bg-[#3375C8] hover:text-[#091422] hover:shadow-blue-lg transform transition duration-500 text-md border border-[#3375C8]"
              >
                Ingresar
              </a>
            </li> */
}
