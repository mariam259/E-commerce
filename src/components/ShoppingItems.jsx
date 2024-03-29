import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { add } from "./State/Slice/CartSlice.jsx";

export default function ShoppingItems({ item }) {
  const dispatch = useDispatch();
  const { id, price, name, image } = item;

  return (
    <div>
      <Link to={`/ItemDetails/${id}`}>
        {/* pass a prop to ItemDetails (help us to show the item with the same id )*/}
        <div className="bg-gray-200 h-[400px] flex items-center justify-center rounded-lg">
          <img src={image} className="w-[200px]" />
        </div>
      </Link>

      <div className="mt-6 flex justify-between items-center px-4">
        <div className="text-sm font-bold mb-3">{name}</div>
        <div className="text-xl font-bold">$ {price}</div>
        <button
          className="bg-gray-300 p-3 rounded-xl"
          onClick={() => dispatch(add(item))}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
