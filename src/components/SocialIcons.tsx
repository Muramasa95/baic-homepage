import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-3 justify-center items-center">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700"
      >
        <FaFacebook className="text-3xl" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-600"
      >
        <FaInstagram className="text-3xl" />
      </a>
      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-800"
      >
        <FaTiktok className="text-3xl" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500"
      >
        <FaTwitter className="text-3xl" />
      </a>
      <a
        href="mailto:someone@example.com"
        className="text-gray-500 hover:text-gray-600"
      >
        <FaEnvelope className="text-3xl" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-800"
      >
        <FaLinkedin className="text-3xl" />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-700"
      >
        <FaYoutube className="text-3xl" />
      </a>
    </div>
  );
};

export default SocialIcons;
