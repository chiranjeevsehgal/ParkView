import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center h-screen">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            About the Parking Management System
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            <strong>Parking Management System</strong> is a parking space detector and counter powered by computer vision technology. This system efficiently detects and monitors available parking spaces, providing real-time data on parking space availability to users. It uses advanced computer vision algorithms to accurately track space occupancy, making it easy for users to find available parking spots and optimize space utilization.
          </p>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Tech Stack Used:</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>OpenCV</li>
            <li>Scikit-learn</li>
            <li>Pillow</li>
          </ul>
          <p className="text-lg text-gray-700">
            Developed by <br/> <strong>Chiranjeev Sehgal</strong>, <strong>Hemangshu Dey</strong>, <strong>Adarsh Kumar Dash</strong>
          </p>
        </div>
      </div>
    </>
  )
}

export default About
