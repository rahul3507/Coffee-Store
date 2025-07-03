/** @format */
import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import ImageUploader from "../components/ui/ImageUploader";
import { Navigate } from "react-router-dom";

const AddCoffee = () => {
  const [photoUrl, setPhotoUrl] = useState("");
  const [isImageUploading, setIsImageUploading] = useState(false);

  const handleImageUpload = (imageUrl) => {
    setPhotoUrl(imageUrl);
  };

  const handleUploadingChange = (uploading) => {
    setIsImageUploading(uploading);
  };

  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const price = form.price.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      price,
      photoUrl,
    };

    // Logic to handle adding coffee goes here
    console.log("Coffee added:", newCoffee);

    //send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Coffee added successfully:", data);
        if (data.insertedId) {
          toast.success("Coffee added successfully!");
          form.reset(); // Reset the form after successful submission
          setPhotoUrl(""); // Reset the photo URL state
          Navigate("/"); // Navigate to the home page after adding coffee
        }
      })
      .catch((error) => {
        console.error("Error adding coffee:", error);
      });
  };

  return (
    <div className="justify-center items-center p-4 flex min-h-screen ">
      <div className="bg-[#F4F3F0]  min-w-full md:min-w-xl lg:min-w-2xl xl:min-w-3xl  m-auto   rounded-lg p-6">
        <h1 className="text-3xl text-center font-bold">Add Coffee</h1>

        <form className="mt-4" onSubmit={handleAddCoffee}>
          {/* form name and quantity row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Coffee Name
              </label>
              <Input
                required
                type="text"
                id="name"
                placeholder="Enter Coffee Name"
                className="shadow  appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                required
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="quantity"
              >
                Available Quantity
              </label>
              <Input
                type="text"
                id="quantity"
                placeholder="Available quantity"
                className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* form supplier and taste row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="supplier"
              >
                Supplier Name
              </label>
              <Input
                required
                type="text"
                id="supplier"
                placeholder="Supplier name"
                className="shadow  appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="taste"
              >
                Taste
              </label>
              <Input
                type="text"
                id="taste"
                placeholder="Taste"
                className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* form category and details row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <Input
                type="text"
                id="category"
                placeholder="Category"
                className="shadow  appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="details"
              >
                Details
              </label>
              <Input
                type="text"
                id="details"
                placeholder="Details"
                className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* form price row */}
          <div className="grid grid-cols-1  gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <Input
                type="text"
                id="price"
                placeholder="Price"
                className="shadow  appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* form photo upload section */}
          <div className="grid grid-cols-1 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="photo"
              >
                Coffee Photo
              </label>
              <ImageUploader
                onImageUpload={handleImageUpload}
                onUploadingChange={handleUploadingChange}
                currentImageUrl={photoUrl}
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-6">
            <Button
              type="submit"
              disabled={isImageUploading}
              className={`w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                isImageUploading
                  ? "bg-gray-400 cursor-not-allowed text-gray-600"
                  : "bg-amber-300 hover:bg-amber-400 text-black"
              }`}
            >
              Add Coffee
            </Button>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
