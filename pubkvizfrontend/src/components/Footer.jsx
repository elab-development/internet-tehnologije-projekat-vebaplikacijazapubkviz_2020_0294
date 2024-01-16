import React from "react";


const Footer = () => {
  return (
    <footer className="bg-sky-700 flex items-center justify-center h-screen max-h-[6vh]">
      <p className="text-sm text-white">
        &copy; {new Date().getFullYear()} FE pub
      </p>
    </footer>
  );
};

export default Footer;