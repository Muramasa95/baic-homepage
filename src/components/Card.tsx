import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  icon: string;
  text: string;
  link: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ icon, text, link, alt }) => {
  return (
    <Link
      to={link}
      className="bg-white rounded-lg w-64 h-48 shadow-md cursor-pointer transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <img
          src={icon}
          alt={alt}
          className="w-24 h-24 p-2 transition-transform transform hover:drop-shadow-glow duration-300"
        />
        <span className="text-gray-700 hover:text-black mt-2">{text}</span>
      </div>
    </Link>
  );
};

export default Card;
