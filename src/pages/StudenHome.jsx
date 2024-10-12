const StudentHome = () => {
  return (
    <div className="background-login h-screen w-screen flex flex-col">
      <div className="h-1/10 w-full flex items-center justify-end pr-8">
        <div className="flex items-center text-white">
          <div className="mr-4 text-right">
            <p className="text-md">Juan Perez</p>
            <p className="text-gray-400 text-sm">Estudiante</p>
          </div>
          <div className="bg-gray-400 w-16 h-16 rounded-full flex items-center justify-center">
            <img
              src="https://via.placeholder.com/150"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="h-8/10 flex flex-col items-center justify-center bg-gray-200">
        <h1 className="text-2xl font-bold mb-4">
          Solicitud de Laboratorio Metal-Mecánica
        </h1>
        <p className="mb-4">
          Elige si deseas pedir prestado material o rentar una máquina
        </p>
        <div className="flex space-x-4 mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Pedir prestado material
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Rentar una máquina
          </button>
        </div>
        <p>Selecciona una opción para continuar con tu solicitud.</p>
      </div>
      <div className="h-1/10"></div>
    </div>
  );
};

export default StudentHome;
