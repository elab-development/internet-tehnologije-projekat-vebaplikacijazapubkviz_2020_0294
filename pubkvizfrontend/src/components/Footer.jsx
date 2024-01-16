import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";

const Footer = ({ openModal }) => {
  return (
    <footer className="bg-sky-700 flex items-center justify-center h-screen max-h-[6vh]">
      <p className="text-sm text-white">
        &copy; {new Date().getFullYear()} FE pub
      </p>
      <FaRegCircleQuestion
        className="text-white ml-4 cursor-pointer"
        onClick={openModal}
      >
        Open Modal
      </FaRegCircleQuestion>
    </footer>
  );
};

export default Footer;
