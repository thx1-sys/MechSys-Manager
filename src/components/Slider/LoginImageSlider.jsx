import React from "react";

const LoginImageSlider = ({ images, currentIndex }) => {
  return (
    <div className="hidden lg:block w-full h-full rounded-2xl overflow-hidden relative">
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
  );
};

export default LoginImageSlider;
