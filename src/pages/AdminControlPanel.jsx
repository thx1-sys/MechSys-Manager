import React from "react";

const AdminControlPanel = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">
        Panel de Control del Administrador
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Estadísticas */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Estadísticas</h2>
          <p>Usuarios activos: 120</p>
          <p>Publicaciones: 45</p>
          <p>Comentarios: 300</p>
        </div>

        {/* Gestión de Usuarios */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Gestión de Usuarios</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Ver Usuarios
          </button>
        </div>

        {/* Configuración */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Configuración</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Ajustes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminControlPanel;
