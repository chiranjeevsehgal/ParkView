# Parking Spot Monitoring System

## Introduction

The Parking Spot Monitoring System is a comprehensive solution that utilizes computer vision and machine learning techniques to detect and monitor the occupancy status of parking spots in real-time. This project aims to provide a user-friendly interface for parking lot management, allowing users to easily track available parking spaces and optimize the utilization of the parking infrastructure.

## Features

1. **Parking Spot Detection**: The system can accurately identify individual parking spots within the provided video feed and mask image.
2. **Occupancy Status Monitoring**: By analyzing the video frames, the application can determine whether each parking spot is occupied or empty.
3. **Real-Time Visualization**: The frontend web application displays a live heatmap-style visualization of the parking lot, highlighting the available and occupied spots in real-time.
4. **Responsive Design**: The web interface is designed to be responsive, providing a seamless user experience across various devices and screen sizes.

## Setup and Installation

### Backend Setup

1. Navigate to the backend directory: `cd backend/main`
2. Run the Flask application: `python app.py`

### Frontend Setup

1. Navigate to the frontend directory: `cd frontend`
2. Start the development server: `npm run dev`

This will launch the frontend application, which can be accessed at `http://localhost:3000`.

## How it Works

The Parking Spot Monitoring System consists of two main components: the backend and the frontend.

### Backend

The backend is built using Flask, a lightweight Python web framework. It is responsible for processing the uploaded video and mask files, detecting the parking spots, and determining the occupancy status of each spot. The key steps are as follows:

1. **Video and Mask Processing**: The backend receives the video and mask files uploaded by the user and processes them using OpenCV, a powerful computer vision library.
2. **Parking Spot Detection**: The mask image is used to identify the individual parking spots within the video feed. This is done by applying connected component analysis to the mask.
3. **Occupancy Status Determination**: For each detected parking spot, the backend analyzes the video frames to detect changes and classify the spot as either occupied or empty. This is achieved by training a machine learning model to recognize the visual patterns of occupied and empty spaces.
4. **Real-Time Visualization**: The backend collects and manages the parking spot data, which is then transmitted to the frontend for real-time visualization.

### Frontend

The frontend is built using a modern web development framework, such as React, Vue, or Angular. It provides the user interface for the Parking Spot Monitoring System. The key features of the frontend are:

1. **Responsive Design**: The web interface is designed to be responsive, ensuring a seamless user experience on various devices and screen sizes.
2. **Parking Lot Visualization**: The frontend displays a visual representation of the parking lot, using a heatmap-style layout to indicate the availability of parking spots.
3. **Real-Time Updates**: The frontend continuously receives updates from the backend and updates the parking lot visualization in real-time, reflecting the current occupancy status of each spot.

## Screenshots

### Placeholder for Frontend Site Image
![Frontend Site Image](parkview_frontend_ss.png)

### Placeholder for Output Video
![Output Video](parkview_output2.mp4)

## Conclusion

The Parking Spot Monitoring System provides a comprehensive solution for managing and optimizing the utilization of parking infrastructure. By leveraging computer vision and machine learning techniques, the system can accurately detect and monitor the occupancy status of parking spots, enabling parking lot operators to make informed decisions and improve the overall user experience for drivers.
