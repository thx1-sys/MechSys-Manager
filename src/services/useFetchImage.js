import { useEffect, useState } from "react";
import axios from "axios";

const useFetchImage = (nameImage) => {
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const hostExpress = import.meta.env.VITE_HOST_EXPRESS;
    if (!hostExpress) {
      setError(new Error("VITE_HOST_EXPRESS no está definida"));
      return;
    }

    const fetchImage = () => {
      axios
        .get(`${hostExpress}/img/${nameImage}`)
        .then(() => {
          setImageUrl(`${hostExpress}/img/${nameImage}`);
          setError(null); // Clear error if the image loads successfully
        })
        .catch((error) => setError(error));
    };

    fetchImage();

    const intervalId = setInterval(() => {
      if (error) {
        fetchImage();
      }
    }, 10000); // 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [error, nameImage]);

  return { imageUrl, error };
};

export default useFetchImage;
