import React, { useState } from "react";
import { ParkingSquare, Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to check if a route is active
  const isActive = (path) => location.pathname === path;

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className={`text-lg font-semibold hover:text-gray-700 px-3 py-2 rounded-md transition-all ${
                isActive("/") ? "text-gray-700" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-lg font-semibold hover:text-gray-700 px-3 py-2 rounded-md transition-all ${
                isActive("/about") ? "text-gray-700" : "text-white"
              }`}
            >
              About Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X size={32} />
              ) : (
                <Menu size={32} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                onClick={toggleMobileMenu}
                className={`block text-lg font-semibold hover:text-gray-700 px-3 py-2 rounded-md transition-all ${
                  isActive("/") ? "text-gray-700" : "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={toggleMobileMenu}
                className={`block text-lg font-semibold hover:text-gray-700 px-3 py-2 rounded-md transition-all ${
                  isActive("/about") ? "text-gray-700" : "text-white"
                }`}
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;