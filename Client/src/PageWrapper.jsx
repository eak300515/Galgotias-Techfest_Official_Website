import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-center bg-cover p-6"
      style={{
        backgroundImage: "url('./src/assets/hero/robot.jpg')",
      }}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
