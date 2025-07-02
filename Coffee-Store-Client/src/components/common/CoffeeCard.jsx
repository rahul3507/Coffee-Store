/** @format */
import Swal from "sweetalert2";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Button } from "../ui/button";
import { Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, onDelete }) => {
  const {
    _id,
    name,
    quantity,
    supplier,
    taste,
    category,
    details,
    price,
    photoUrl,
  } = coffee;

  const handleDelete = (_id) => {
    console.log("Delete button clicked for coffee ID:", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Coffee deleted successfully:", data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              // Call the onDelete callback to update the parent state
              onDelete(_id);
            }
          });
      }
    });
  };

  return (
    <div className="">
      <CardContainer className="inter-var min-w-60">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <div className="grid grid-cols-6 gap-3 items-start justify-between h-full">
            <CardItem translateZ="100" className="w-full mt-4 col-span-3 ">
              <img
                src={photoUrl}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>

            <CardItem
              translateZ="50"
              className="text-base font-bold text-neutral-600 dark:text-white col-span-3 mt-5 "
            >
              <p className="flex flex-row">Name: {name}</p>
              <p className="flex flex-row">Supplier : {supplier}</p>
              <p className="flex flex-row">Price : {price} Taka</p>

              <div className="flex flex-row justify-between items-end mt-8">
                <Button className=" border-2 bg-amber-200 text-xs text-black">
                  View
                </Button>
                <Link
                  to={`update-coffee/${_id}`}
                  className="py-2 px-3 border-2 rounded-lg bg-gray-600 text-xs text-white"
                >
                  <Pencil className="h-4 w-4" />
                </Link>
                <Button
                  onClick={() => handleDelete(_id)}
                  className="border-2 bg-red-400 text-xs text-black"
                >
                  <Trash className="h-2 w-2" />
                </Button>
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default CoffeeCard;
