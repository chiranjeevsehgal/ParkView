import React from "react";
import { ParkingSquare } from "lucide-react";
import { useLocation, Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const location = useLocation(); // Get the current route location

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
          <div className="flex space-x-6">
            <Link
              to="/"
              className={`text-lg font-semibold hover:text-gray-700 px-3 py-2 rounded-md transition-all ${
                location.pathname === "/" ? "text-gray-700" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-lg font-semibold  hover:text-gray-700 px-3 py-2 rounded-md transition-all ${
                location.pathname === "/about" ? "text-gray-700" : "text-white"
              }`}
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
