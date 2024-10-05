import useFetchImage from "../../hooks/useFetchImage";
import "../../styles/loader.css";
import { FeatureCard } from "../Card/FeatureCard";

const KeyFeatures = () => {
  const features = [
    {
      title: "Optimización de Recursos",
      description:
        "Automatiza el control de inventarios, la reservación de equipos y el seguimiento de préstamos. Asegura una experiencia de usuario más ágil y eficiente, maximizando el uso de los recursos del laboratorio.",
      imageName: "Card_1.webp",
    },
    {
      title: "Generación de Reportes",
      description:
        "Con un solo clic, genera reportes detallados del estado del inventario, uso de equipos y seguimiento de préstamos. Mejora la organización y planificación con datos claros y accesibles.",
      imageName: "Card_2.webp",
    },
    {
      title: "Historial de Uso",
      description:
        "Accede a un registro detallado del uso de los equipos y herramientas del laboratorio. Con esta información puedes identificar patrones y planificar el mantenimiento de forma más eficiente.",
      imageName: "Card_3.webp",
    },
    {
      title: "Personalización de Roles",
      description:
        "Cada usuario tiene acceso a un perfil específico, ya sea estudiante, profesor o administrador. Cada uno con permisos y herramientas adecuadas a sus necesidades.",
      imageName: "Card_4.webp",
    },
    {
      title: "Accesibilidad Multiplataforma",
      description:
        "Utiliza el sistema desde cualquier dispositivo, ya sea un ordenador, tableta o móvil. Esta accesibilidad permite a estudiantes y profesores gestionar recursos en cualquier momento y lugar.",
      imageName: "Card_5.webp",
    },
    {
      title: "Interfaz Intuitiva",
      description:
        "Disfruta de una interfaz de usuario amigable y fácil de navegar, lo que facilita el acceso a todas las funcionalidades del sistema, mejorando la experiencia general del usuario.",
      imageName: "Card_6.webp",
    },
  ];

  return (
    <div id="KeyFeatures" className="w-full flex flex-col items-center pb-20">
      <div className="w-full max-w-screen-xl text-center mb-4 mt-20 px-4">
        <h3 className="text-4xl font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          ¿Qué ofrece MechSys Manager?
          <span className="block text-2xl font-normal text-[#757575] mt-2 pt-2">
            Todo lo que necesitas para gestionar laboratorios de Metal-Mecánica
            de manera eficiente.
          </span>
        </h3>
      </div>
      <div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 sm:p-8">
        {features.map((feature, index) => {
          const { imageUrl, error } = useFetchImage(feature.imageName);
          const finalImageUrl = error
            ? "https://via.placeholder.com/150"
            : imageUrl;
          return (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={finalImageUrl}
              className="aspect-w-1 aspect-h-1"
            />
          );
        })}
      </div>
    </div>
  );
};

export { KeyFeatures };
