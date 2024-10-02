import React, { useState, useEffect } from "react";
import Eye from "../components/Svg/Eye";
import EyeOff from "../components/Svg/EyeOff";
import useFetchImage from "../hooks/useFetchImage";

const SignUp = () => {
  const { imageUrl } = useFetchImage("IMG_LOGIN_1.webp");
  const { imageUrl: image1 } = useFetchImage("IMG_LOGIN_2.webp");
  const { imageUrl: image2 } = useFetchImage("IMG_LOGIN_3.webp");
  const { imageUrl: image3 } = useFetchImage("IMG_LOGIN_4.webp");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia cada 10 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const validate = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = "Nombre es requerido";
    if (!lastName) newErrors.lastName = "Apellido es requerido";
    if (!email) newErrors.email = "Correo Electrónico es requerido";
    if (!password) newErrors.password = "Contraseña es requerida";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form submitted");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-[#000000] via-[#101010] to-[#202020]">
      <div className="bg-black w-full h-full bg-opacity-10 backdrop-filter backdrop-blur-lg p-10 rounded-lg">
        <div className="w-full h-full grid grid-cols-2 items-center justify-center">
          <div className="w-11/12 h-11/12 rounded-2xl overflow-hidden relative">
            <div
              className="w-full h-full absolute inset-0 flex transition-transform duration-500 ease-in-out"
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
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-8/10">
              <div className="bg-transparent py-12 px-12 mt- rounded-2xl shadow-lg text-white border border-[#757575] transform transition duration-500 hover:shadow-gray-lg hover:bg-black hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg group">
                <h2 className="text-2xl font-bold mb-2 text-center text-[#F0F0F0]">
                  Registro
                </h2>
                <h3 className="text-[#757575] text-center font-light mb-12">
                  ¡Bienvenido! Por favor, ingresa tus datos para registrarte
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 flex space-x-4">
                    <div className="w-1/2">
                      <label
                        className="block text-[#757575] font-light text-sm mb-2"
                        htmlFor="firstName"
                      >
                        Nombre
                      </label>
                      <input
                        placeholder="Nombre"
                        className="w-full bg-transparent border-2 border-[#3e3e3e] rounded-lg text-[#F0F0F0] px-6 py-3 text-base hover:border-[#F0F0F0] cursor-pointer transition custom-placeholder"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="w-1/2">
                      <label
                        className="block text-[#757575] font-light text-sm mb-2"
                        htmlFor="lastName"
                      >
                        Apellido
                      </label>
                      <input
                        placeholder="Apellido"
                        className="w-full bg-transparent border-2 border-[#3e3e3e] rounded-lg text-[#F0F0F0] px-6 py-3 text-base hover:border-[#F0F0F0] cursor-pointer transition custom-placeholder"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-[#757575] font-light text-sm mb-2"
                      htmlFor="email"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      placeholder="example@itduango.edu.mx"
                      className="w-full bg-transparent border-2 border-[#3e3e3e] rounded-lg text-[#F0F0F0] px-6 py-3 text-base hover:border-[#F0F0F0] cursor-pointer transition custom-placeholder"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
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
                        className="w-full bg-transparent border-2 border-[#3e3e3e] rounded-lg text-[#F0F0F0] px-6 py-3 text-base hover:border-[#F0F0F0] cursor-pointer transition custom-placeholder"
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
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div className="mb-4 relative">
                    <label
                      className="block text-[#757575] font-light text-sm mb-2"
                      htmlFor="confirmPassword"
                    >
                      Confirmar Contraseña
                    </label>
                    <div className="relative flex items-center">
                      <input
                        className="w-full bg-transparent border-2 border-[#3e3e3e] rounded-lg text-[#F0F0F0] px-6 py-3 text-base hover:border-[#F0F0F0] cursor-pointer transition custom-placeholder"
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirme su contraseña"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-0 px-3 py-2 text-[#3e3e3e] hover:text-[#F0F0F0] focus:outline-none"
                      >
                        {showConfirmPassword ? <Eye /> : <EyeOff />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-[#0A170D] w-full mt-8 cursor-pointer px-6 py-2 text-[#3E9055] font-inter rounded-xl hover:bg-[#3E9055] hover:text-[#0A170D] hover:shadow-green-lg transform transition duration-500 text-md border border-[#3E9055]"
                      type="submit"
                    >
                      Registrarse
                    </button>
                  </div>
                  <div>
                    <p className="font-light text-sm text-[#757575] mt-4 text-center">
                      ¿Ya tienes una cuenta?&nbsp;
                      <a href="#">
                        <span className="font-bold text-[#F0F0F0] opacity-50 transform transition duration-500 hover:opacity-100 hover:border-b hover:border-white">
                          Inicia Sesión
                        </span>
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SignUp };
