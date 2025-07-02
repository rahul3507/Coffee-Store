/** @format */

import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/common/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <>
      <div className="m-1 md:m-3 lg:m-5">
        <h1 className="text-3xl text-orange-300 text-center font-bold mb-7">
          Total Coffees: {coffees.length}
        </h1>
        <div className="flex flex-wrap  gap-3 justify-center items-center">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
