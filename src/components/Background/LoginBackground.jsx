import React from "react";

const LoginBackground = ({ children }) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-[#000000] via-[#101010] to-[#202020] overflow-y-auto">
      {children}
    </div>
  );
};

export default LoginBackground;
