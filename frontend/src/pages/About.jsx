import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
            About the Parking Management System
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
            <strong>Parking Management System</strong> is a parking space detector and counter powered by computer vision technology. This system efficiently detects and monitors available parking spaces, providing real-time data on parking space availability to users. It uses advanced computer vision algorithms to accurately track space occupancy, making it easy for users to find available parking spots and optimize space utilization.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Tech Stack Used:</h3>
          <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 space-y-1 sm:space-y-2">
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>OpenCV</li>
            <li>Scikit-learn</li>
            <li>Pillow</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700 text-center">
            Developed by <br/> 
            <span className="block mt-2 font-bold">
              Chiranjeev Sehgal, Hemangshu Dey, Adarsh Kumar Dash
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default About