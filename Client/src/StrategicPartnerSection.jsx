import React from "react";

const StrategicPartnerSection = () => {
  const partnerLogo = "./src/assets/Mask group.png";
  const partnerName = "Strategic Partner";

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-6">
        EVENT CURATORS / STRATEGIC PARTNERS
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Empowering Galgotias Tech Conclave 2025 with innovation and collaboration.
        </p>
        <div className="relative mx-auto p-6 rounded-xl shadow-lg max-w-4xl bg-gradient-to-r from-purple-800 via-black to-purple-800">
          {/* Glow effect behind the logo */}
          <div className="absolute inset-0 bg-gradient-radial from-purple-700/30 via-purple-500/10 to-transparent rounded-xl animate-pulse"></div>
          {/* Logo */}
          <div className="relative z-10">
            <img
              src={partnerLogo}
              alt={`${partnerName} Logo`}
              className="w-full object-contain h-40 mx-auto filter drop-shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartnerSection;
