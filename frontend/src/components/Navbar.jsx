import React from "react";
import { ParkingSquare } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <ParkingSquare className="text-blue-600 mr-3" size={32} />
            <h1 className="text-2xl font-bold text-gray-800 tracking-wider">
              Parking Management
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
