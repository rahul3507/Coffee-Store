/** @format */

import React, { useState, useRef, useEffect } from "react";
import { Button } from "./button";

const ImageUploader = ({
  onImageUpload,
  onUploadingChange,
  currentImageUrl = "",
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState(currentImageUrl);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  // Sync preview with currentImageUrl when it changes
  useEffect(() => {
    setPreview(currentImageUrl);
  }, [currentImageUrl]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file) => {
    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file (PNG, JPG, or GIF)");
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return;
    }

    setUploading(true);
    onUploadingChange?.(true); // Notify parent about upload start

    try {
      // Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "coffee-store");
      formData.append("cloud_name", "dguv2gy23");
      formData.append("api_key", "973966842822985");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dguv2gy23/image/upload",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Cloudinary upload failed: ${
            errorData.error?.message || response.statusText
          }`
        );
      }

      const data = await response.json();
      const imageUrl = data.secure_url;

      // Update preview with the final Cloudinary URL after upload completes
      setPreview(imageUrl);
      onImageUpload(imageUrl); // Notify parent with the final URL
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      alert(`Error uploading image: ${error.message}. Please try again.`);
      setPreview(currentImageUrl); // Revert to previous image on failure
      onImageUpload(currentImageUrl); // Reset URL in parent component
    } finally {
      setUploading(false);
      onUploadingChange?.(false); // Notify parent about upload end
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setPreview("");
    onImageUpload("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full">
      {/* Show upload area when no preview exists or during uploading */}
      {(!preview || uploading) && (
        <div
          className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
            dragActive
              ? "border-amber-400 bg-amber-50"
              : "border-gray-300 hover:border-amber-300 hover:bg-gray-50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={onButtonClick}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleChange}
          />

          {uploading ? (
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-400 mb-2"></div>
              <p className="text-gray-600">Uploading...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <svg
                className="w-12 h-12 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-gray-500 text-sm">PNG, JPG, GIF up to 5MB</p>
            </div>
          )}
        </div>
      )}

      {/* Show image preview only when preview exists and not uploading */}
      {preview && !uploading && (
        <div className="relative mt-4">
          <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex gap-2">
              <Button
                type="button"
                onClick={onButtonClick}
                className="flex-1 bg-amber-300 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded"
              >
                Change Image
              </Button>
              <Button
                type="button"
                onClick={removeImage}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
