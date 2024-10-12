import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useFetchImage from "../hooks/useFetchImage";
import Cookies from "js-cookie";
import LoginForm from "../components/Form/LoginForm";
import LoginBackground from "../components/Background/LoginBackground";
import LoginImageSlider from "../components/Slider/LoginImageSlider";
import Alert from "../components/Alert/Alert";

const LoginPage = () => {
  const { imageUrl } = useFetchImage("IMG_LOGIN_1.webp");
  const { imageUrl: image1 } = useFetchImage("IMG_LOGIN_2.webp");
  const { imageUrl: image2 } = useFetchImage("IMG_LOGIN_3.webp");
  const { imageUrl: image3 } = useFetchImage("IMG_LOGIN_4.webp");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (error) {
      setIsButtonDisabled(true);
      const timer = setTimeout(() => {
        setError("");
        setIsButtonDisabled(false);
      }, 3000); // 3 segundos

      return () => clearTimeout(timer);
    }
  }, [error]);

  const validateToken = () => {
    const token = Cookies.get("token") || sessionStorage.getItem("token");
    if (!token) {
      console.log("Token not found");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_HOST_EXPRESS}/api/protected`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Full response:", response); // Log para imprimir toda la respuesta
        if (response.status !== 200) return;

        const userType = response.data.user.user_type;
        console.log("User type:", userType); // Log para verificar el tipo de usuario

        if (userType === 1) {
          console.log("Navigating to /page1"); // Log para verificar la navegación
          navigate("/page1");
        }
        if (userType === 2) {
          console.log("Navigating to /page2"); // Log para verificar la navegación
          navigate("/page2");
        }
        if (userType === 3) {
          console.log("Navigating to /page3"); // Log para verificar la navegación
          navigate("/dashboardadmin");
        }
        if (userType !== 1 && userType !== 2) {
          console.log("Unknown user type"); // Log para tipos de usuario desconocidos
        }

        console.log("Token found and validated");
      })
      .catch((error) => {
        console.error("Error validating token:", error);
      });
  };

  useEffect(() => {
    if (isAuthenticated) {
      validateToken();
    }
  }, [isAuthenticated, navigate]);

  const validateForm = () => {
    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return false;
    }
    if (!email.endsWith("@itdurango.edu.mx")) {
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
        `${import.meta.env.VITE_HOST_EXPRESS}/api/auth/login`,
        {
          email,
          password,
          rememberMe,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.token) {
        if (rememberMe) {
          document.cookie = `token=${response.data.token}; path=/; max-age=${
            30 * 24 * 60 * 60
          }`;
        } else {
          sessionStorage.setItem("token", response.data.token);
        }
        console.log("Token saved:", response.data.token);

        setError("");
        setIsAuthenticated(true); // Establece el estado de autenticación a true
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
    <LoginBackground>
      {error && (
        <div className="absolute top-0 left-0 w-full flex justify-center mt-4">
          <Alert message={error} />
        </div>
      )}
      <div className="background-login">
        <div className="w-full min-h-screen lg:h-screen p-4 sm:p-10 rounded-lg flex items-center justify-center">
          <div className="w-full lg:h-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
            <div className="flex items-center justify-center w-full h-full p-4 lg:p-0">
              <div className="w-full md:w-20/24 lg:w-18/24">
                <div className="flex items-center justify-center mb-4">
                  {imageUrl && (
                    <img
                      className="h-16 md:h-24 object-cover mr-2 filter grayscale"
                      src={imageUrl}
                      alt="Logo de la Página"
                    />
                  )}
                </div>
                <LoginForm
                  error={error}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  rememberMe={rememberMe}
                  setRememberMe={setRememberMe}
                  handleLogin={handleLogin}
                  isButtonDisabled={isButtonDisabled}
                />
              </div>
            </div>
            <LoginImageSlider images={images} currentIndex={currentIndex} />
          </div>
        </div>
      </div>
    </LoginBackground>
  );
};

export default LoginPage;
