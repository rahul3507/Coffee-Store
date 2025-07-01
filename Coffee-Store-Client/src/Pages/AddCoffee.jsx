/** @format */

import React from "react";
import { Input } from "../components/ui/input";

const AddCoffee = () => {
  return (
    <div className="justify-center items-center p-4 flex min-h-screen ">
      <div className="bg-[#F4F3F0]  min-w-full md:min-w-xl lg:min-w-2xl xl:min-w-3xl  m-auto   rounded-lg p-6">
        <h1 className="text-3xl text-center font-bold">Add Coffee</h1>

        <form className="mt-4">
          {/* form name and quantity row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Supplier
              </label>
              <Input
                type="text"
                id="name"
                placeholder="Enter Supplier"
                className="shadow  appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
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
                Supplier
              </label>
              <Input
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

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
