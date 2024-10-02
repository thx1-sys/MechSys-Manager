import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Eye from "../components/Svg/Eye";
import EyeOff from "../components/Svg/EyeOff";
import useFetchImage from "../hooks/useFetchImage";
import Cookies from "js-cookie";

const Alert = ({ message }) => {
  return (
    <div
      className="fixed top-0 transform z-50 flex items-center py-4 px-10 mb-4 text-sm text-red-800 border border-red-500 rounded-lg bg-transparent slide-down"
      role="alert"
    >
      <svg
        className="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">Error:</span> {message}
      </div>
    </div>
  );
};

const LoginPage = () => {
  const { imageUrl } = useFetchImage("IMG_LOGIN_1.webp");
  const { imageUrl: image1 } = useFetchImage("IMG_LOGIN_2.webp");
  const { imageUrl: image2 } = useFetchImage("IMG_LOGIN_3.webp");
  const { imageUrl: image3 } = useFetchImage("IMG_LOGIN_4.webp");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const navigate = useNavigate();
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (error) {
      setIsButtonDisabled(true);
      const timer = setTimeout(() => {
        setError("");
        setIsButtonDisabled(false);
      }, 3000); // 5 segundos

      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    // Verificar si la cookie de sesión o el sessionStorage están presentes
    const token = Cookies.get("token") || sessionStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3000/api/protected", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            navigate("/dashboardadmin");
            console.log("Token found and validated");
          }
        })
        .catch((error) => {
          console.error("Error validating token:", error);
        });
    } else {
      console.log("Token not found");
    }
  }, [navigate]);

  const validateForm = () => {
    if (!username || !password) {
      setError("Todos los campos son obligatorios");
      return false;
    }
    if (!username.endsWith("@itdurango.edu.mx")) {
      setError("El correo debe contener la extensión @itdurango.edu.mx");
      return false;
    }
    if (password.length < 8) {
      setError("La contraseña debe tener más de 8 caracteres");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          username,
          password,
          rememberMe,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Verificar si la respuesta contiene un token
      if (response.data.token) {
        // Guardar el token en una cookie si rememberMe está activado
        if (rememberMe) {
          document.cookie = `token=${response.data.token}; path=/; max-age=${
            30 * 24 * 60 * 60
          }`;
        } else {
          // Guardar el token en sessionStorage si rememberMe no está activado
          sessionStorage.setItem("token", response.data.token);
        }
        console.log("Token saved:", response.data.token); // Verificar que el token se guarda
        // Redirigir a otra página o actualizar el estado de la aplicación
        setError(""); // Limpiar cualquier error previo
        navigate("/dashboardadmin");
      } else {
        setError(
          "Datos incorrectos. Por favor, verifica tu usuario y contraseña."
        );
      }
    } catch (error) {
      setError(
        "Datos incorrectos. Por favor, verifica tu usuario y contraseña."
      );
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-[#000000] via-[#101010] to-[#202020]">
      {error && <Alert message={error} />}
      <div className="bg-black w-full h-full bg-opacity-10 backdrop-filter backdrop-blur-lg p-10 rounded-lg">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="flex items-center justify-center w-full h-full p-4 md:p-0">
            <div className="w-full md:w-8/10">
              <div className="flex items-center justify-center mb-6">
                {imageUrl && (
                  <img
                    className="h-28 object-cover mr-2 filter grayscale"
                    src={imageUrl}
                    alt="Logo de la Página"
                  />
                )}
              </div>
              <div
                className={`bg-transparent py-12 px-6 md:px-12 mt-12 rounded-2xl shadow-lg text-white border ${
                  error ? "border-red-500" : "border-[#757575]"
                } transform transition duration-500 hover:shadow-gray-lg hover:bg-black hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg group`}
              >
                <h2 className="text-2xl font-bold mb-2 text-center text-[#F0F0F0]">
                  Iniciar Sesión
                </h2>
                <h3 className="text-[#757575] text-center font-light mb-12">
                  ¡Bienvenido de nuevo! Por favor, ingresa tus datos
                </h3>
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label
                      className="block text-[#757575] font-light text-sm mb-2"
                      htmlFor="username"
                    >
                      Nombre de Usuario
                    </label>
                    <input
                      placeholder="example@itdurango.edu.mx"
                      className={`w-full bg-transparent border-2 ${
                        error ? "border-red-500" : "border-[#3e3e3e]"
                      } rounded-lg text-[#F0F0F0] px-6 py-3 text-base hover:border-[#F0F0F0] cursor-pointer transition custom-placeholder`}
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 relative">
                    <label
                      className="block text-[#757575] font-light text-sm mb-2"
                      htmlFor="password"
                    >
                      Contraseña
                    </label>
                    <div className="relative flex items-center">
                      <input
                        className={`w-full bg-transparent border-2 ${
                          error ? "border-red-500" : "border-[#3e3e3e]"
                        } rounded-lg text-[#F0F0F0] px-6 py-3 text-base hover:border-[#F0F0F0] cursor-pointer transition custom-placeholder`}
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Ingrese su contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-0 px-3 py-2 text-[#3e3e3e] hover:text-[#F0F0F0] focus:outline-none"
                      >
                        {showPassword ? <Eye /> : <EyeOff />}
                      </button>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center">
                    <div className="transform transition duration-500 opacity-50 hover:opacity-100">
                      <label
                        htmlFor="rememberMe"
                        className="flex flex-row items-end gap-2 text-[#757575] font-light text-sm hover:text-[#F0F0F0] "
                      >
                        <input
                          id="rememberMe"
                          type="checkbox"
                          className="peer hidden"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <div
                          htmlFor="rememberMe"
                          className="h-5 w-5 flex rounded-md border border-[#3e3e3e] hover:border[#F0F0F0] peer-checked:bg-[#3375C8] transition peer-checked:shadow-blue-lg cursor-pointer"
                        >
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 light:stroke-[#212121] dark:stroke-[#212121]"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 12.6111L8.92308 17.5L20 6.5"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        Recordar por 30 Días
                      </label>
                    </div>
                    <div className="text-right transform transition duration-500 opacity-50 hover:opacity-100">
                      <a
                        href="#"
                        className="text-[#757575] hover:text-[#F0F0F0] text-sm cursor-pointer"
                      >
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className={`w-full px-6 py-3 font-inter rounded-xl ${
                        error
                          ? "bg-red-500 hover:bg-red-600 text-white shadow-red-lg"
                          : "bg-[#091422] text-[#3375C8] hover:bg-[#3375C8] hover:text-[#091422] hover:shadow-blue-lg"
                      } transform transition duration-500 text-md border ${
                        error ? "border-red-500" : "border-[#3375C8]"
                      }`}
                      type="submit"
                      disabled={isButtonDisabled}
                    >
                      Iniciar Sesión
                    </button>
                  </div>
                  <div>
                    <p className="font-light text-sm text-[#757575] mt-4 text-center">
                      ¿No tienes una cuenta?&nbsp;
                      <a href="#">
                        <span className="font-bold text-[#F0F0F0] opacity-50 transform transition duration-500 hover:opacity-100 hover:border-b hover:border-white">
                          Regístrate
                        </span>
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-20/24 h-22/24 md:h-22/24 rounded-2xl overflow-hidden relative">
            <div
              className="w-full h-full absolute inset-0 flex transition transform duration-500 ease-in-out opacity-80 hover:opacity-100"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full h-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-1 rounded-sm ${
                    index === currentIndex ? "w-6 bg-white" : "bg-gray-400"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoginPage };
