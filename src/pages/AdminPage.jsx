import React from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaChartBar,
  FaSignOutAlt,
  FaBell,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Borrar cookies y sessionStorage
    Cookies.remove("token");
    sessionStorage.removeItem("token");
    // Redirigir a la página de inicio de sesión
    navigate("/home");
  };

  return (
    <div className="w-screen h-screen flex">
      {/* Sidebar */}
      <div className="w-1/5 h-full bg-[#101010] text-white flex flex-col items-center py-10">
        <div className="mb-10">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="flex flex-col space-y-4 w-full px-4">
          <a
            href="#"
            className="flex items-center space-x-2 hover:text-gray-400 w-full py-2 px-4 rounded-lg hover:bg-gray-800"
          >
            <FaHome />
            <span>Home</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 hover:text-gray-400 w-full py-2 px-4 rounded-lg hover:bg-gray-800"
          >
            <FaUser />
            <span>Users</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 hover:text-gray-400 w-full py-2 px-4 rounded-lg hover:bg-gray-800"
          >
            <FaChartBar />
            <span>Analytics</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 hover:text-gray-400 w-full py-2 px-4 rounded-lg hover:bg-gray-800"
          >
            <FaCog />
            <span>Settings</span>
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 hover:text-gray-400 w-full py-2 px-4 rounded-lg hover:bg-gray-800"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-4/5 h-full bg-gradient-to-b from-[#000000] via-[#101010] to-[#202020] p-10 text-white">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <FaBell className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaEnvelope className="text-xl hover:text-gray-400 cursor-pointer" />
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <span>Admin</span>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#202020] p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaHome className="text-4xl text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold">Overview</h3>
              <p>Some overview content here...</p>
            </div>
          </div>
          <div className="bg-[#202020] p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaChartBar className="text-4xl text-green-500" />
            <div>
              <h3 className="text-xl font-semibold">Statistics</h3>
              <p>Some statistics content here...</p>
            </div>
          </div>
          <div className="bg-[#202020] p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaUser className="text-4xl text-red-500" />
            <div>
              <h3 className="text-xl font-semibold">Reports</h3>
              <p>Some reports content here...</p>
            </div>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-[#202020] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">User List</h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-700">Name</th>
                <th className="py-2 px-4 border-b border-gray-700">Email</th>
                <th className="py-2 px-4 border-b border-gray-700">Role</th>
                <th className="py-2 px-4 border-b border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-700">John Doe</td>
                <td className="py-2 px-4 border-b border-gray-700">
                  john@example.com
                </td>
                <td className="py-2 px-4 border-b border-gray-700">Admin</td>
                <td className="py-2 px-4 border-b border-gray-700">
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline ml-2">
                    Delete
                  </button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export { AdminPage };
