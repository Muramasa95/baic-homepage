import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaMailBulk,
} from "react-icons/fa";

const Topbar: React.FC = () => {
  return (
    <div className="bg-black text-white px-32">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-semibold text-sm">YOUR WISH .. OUR WAY</div>

        <div className="flex space-x-2">
          <div className="relative">
            <FaFacebook className="w-3 h-6 cursor-pointer hover:text-blue-500" />
            <span className="invisible absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white p-1 rounded group-hover:visible hover:visible transition-opacity duration-300">
              Follow us on Facebook
            </span>
          </div>

          <div className="relative">
            <FaInstagram className="w-3 h-6 cursor-pointer hover:text-pink-500" />
            <span className="invisible absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white p-1 rounded group-hover:visible hover:visible transition-opacity duration-300">
              Follow us on Instagram
            </span>
          </div>

          <div className="relative">
            <FaTiktok className="w-3 h-6 cursor-pointer hover:text-gray-600" />
            <span className="invisible absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white p-1 rounded group-hover:visible hover:visible transition-opacity duration-300">
              Follow us on TikTok
            </span>
          </div>

          <div className="relative">
            <FaTwitter className="w-3 h-6 cursor-pointer hover:text-blue-400" />
            <span className="invisible absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white p-1 rounded group-hover:visible hover:visible transition-opacity duration-300">
              Follow us on Twitter
            </span>
          </div>

          <div className="relative">
            <FaMailBulk className="w-3 h-6 cursor-pointer hover:text-yellow-400" />
            <span className="invisible absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white p-1 rounded group-hover:visible hover:visible transition-opacity duration-300">
              Send us an email
            </span>
          </div>

          <div className="relative">
            <FaYoutube className="w-3 h-6 cursor-pointer hover:text-red-600" />
            <span className="invisible absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white p-1 rounded group-hover:visible hover:visible transition-opacity duration-300">
              Follow us on Youtube
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
