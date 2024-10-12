import React, { useEffect, Suspense, lazy, useState } from "react";
import {
  useLocation,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LazyLoader from "./components/Lazy/LazyLoader";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUp = lazy(() => import("./pages/SignUp"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const HomeStudenPage = lazy(() => import("./pages/StudenHome"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LazyLoader />}>
        {isLoading ? (
          <LazyLoader />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage onLoad={handleImageLoad} />} />
            <Route
              path="/student_home"
              element={<HomeStudenPage onLoad={handleImageLoad} />}
            />
            <Route
              path="/login"
              element={<LoginPage onLoad={handleImageLoad} />}
            />
            <Route
              path="/signup"
              element={<SignUp onLoad={handleImageLoad} />}
            />
            <Route
              path="/dashboardadmin"
              element={
                <PrivateRoute>
                  <AdminPage onLoad={handleImageLoad} />
                </PrivateRoute>
              }
            />
          </Routes>
        )}
      </Suspense>
    </Router>
  );
}

export default App;
