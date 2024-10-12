import React from "react";
import Eye from "../Svg/Eye";
import EyeOff from "../Svg/EyeOff";

const LoginForm = ({
  error,
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  rememberMe,
  setRememberMe,
  handleLogin,
  isButtonDisabled,
}) => {
  return (
    <div
      className={`bg-black/50 py-8 px-4 md:px-8 lg:px-12 mt-8 rounded-2xl shadow-lg text-white border ${
        error ? "border-red-500" : "border-[#757575]"
      } transform transition duration-500 hover:shadow-gray-lg hover:bg-black hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-3xl group`}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-[#F0F0F0]">
        Iniciar Sesión
      </h2>
      <h3 className="text-[#757575] text-center font-light mb-12">
        ¡Bienvenido de nuevo! Por favor, ingresa tus datos
      </h3>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            className="block text-[#757575] font-light text-sm mb-2"
            htmlFor="email"
          >
            Correo Electrónico
          </label>
          <input
            placeholder="example@itdurango.edu.mx"
            className={`w-full bg-transparent border-2 ${
              error ? "border-red-500" : "border-[#3e3e3e]"
            } rounded-lg text-[#F0F0F0] px-6 py-3 text-base hover:border-[#F0F0F0] cursor-pointer transition custom-placeholder`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
              className={`w-full bg-transparent border-2 sm: ${
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
              Recordarme
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
            <a href="/signup">
              <span className="font-bold text-[#F0F0F0] opacity-50 transform transition duration-500 hover:opacity-100 hover:border-b hover:border-white">
                Regístrate
              </span>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
