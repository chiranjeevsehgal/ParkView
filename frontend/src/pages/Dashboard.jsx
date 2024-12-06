import React, { useState } from "react";
import { Upload, FileImage, FileVideo, CheckCircle, Trash2, Loader } from "lucide-react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false); // Track loading state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile({
        file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile({
        file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if at least one file is uploaded
    if (!videoFile && !imageFile) {
      alert("Please upload at least one media file.");
      return;
    }

    setLoading(true); // Set loading to true

    const uploadData = new FormData();

    if (videoFile) {
      uploadData.append("video", videoFile.file);
    }

    if (imageFile) {
      uploadData.append("mask", imageFile.file);
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/process_media", {
        method: "POST",
        body: uploadData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Success:", result);

      alert("Execution terminated!");
      setVideoFile(null);
      setImageFile(null);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to process media. Please try again.");
    } finally {
      setLoading(false); // Set loading to false after submission
    }
  };

  const removeFile = (type) => {
    if (type === "image") {
      setImageFile(null);
    } else {
      setVideoFile(null);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center h-screen">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Media Upload Dashboard
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mask Upload
                </label>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center 
                  hover:border-blue-500 transition-all group"
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="imageUpload"
                  />
                  <label htmlFor="imageUpload" className="cursor-pointer block">
                    {imageFile ? (
                      <div className="relative">
                        <img
                          src={imageFile.preview}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeFile("image")}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <FileImage
                          className="mx-auto text-gray-400 group-hover:text-blue-500 transition-colors"
                          size={48}
                        />
                        <p className="mt-2 text-sm text-gray-600 group-hover:text-blue-500">
                          Click to upload image
                        </p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Video Upload
                </label>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center 
                  hover:border-blue-500 transition-all group"
                >
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="hidden"
                    id="videoUpload"
                  />
                  <label htmlFor="videoUpload" className="cursor-pointer block">
                    {videoFile ? (
                      <div className="relative">
                        <video
                          src={videoFile.preview}
                          className="w-full h-48 object-cover rounded-lg"
                          controls
                        />
                        <button
                          type="button"
                          onClick={() => removeFile("video")}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <FileVideo
                          className="mx-auto text-gray-400 group-hover:text-blue-500 transition-colors"
                          size={48}
                        />
                        <p className="mt-2 text-sm text-gray-600 group-hover:text-blue-500">
                          Click to upload video
                        </p>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={!imageFile && !videoFile || loading}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg 
                hover:bg-blue-600 transition-colors 
                flex items-center justify-center mx-auto 
                disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader className="animate-spin mr-2" size={20} />
                ) : (
                  <CheckCircle className="mr-2" size={20} />
                )}
                {loading ? "Processing..." : "Upload Media"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
