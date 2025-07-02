/** @format */

import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/common/CoffeeCard";
import { useState } from "react";

function App() {
  const coffeeList = useLoaderData();
  const [coffees, setCoffees] = useState(coffeeList);
  // Handle deletion
  const handleDelete = (id) => {
    setCoffees(coffees.filter((coffee) => coffee._id !== id));
  };
  return (
    <>
      <div className="m-1 md:m-3 lg:m-5">
        <h1 className="text-3xl text-orange-300 text-center font-bold mb-7">
          Total Coffees: {coffees.length}
        </h1>
        <div className="flex flex-wrap  gap-3 justify-center items-center">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
