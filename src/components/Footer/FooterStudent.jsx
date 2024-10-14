// Footer.jsx
import React from "react";

const FooterStudent = ({ footerLogoUrl }) => {
  return (
    <footer className="bg-black text-white py-2 lg:py-4 border-t border-[#303030]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-auto mb-2 lg:mb-0">
            <p className="text-[#757575] text-center lg:text-left text-xs lg:text-sm">
              © 2024 MechSys Manager, ITD.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <div className="flex items-center justify-center lg:justify-end">
              {footerLogoUrl && (
                <img
                  className="w-4 h-4 lg:w-6 lg:h-6 object-cover mr-1 lg:mr-2 filter grayscale"
                  src={footerLogoUrl}
                  alt="Logo de la Página"
                />
              )}
              <span className="text-[#757575] text-xs lg:text-sm">
                MechSys Manager
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterStudent;
