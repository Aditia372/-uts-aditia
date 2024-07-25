/* eslint-disable react/prop-types */
import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import {song, addToCart} from "./MyList";

export function Song({ song, addToCart }) {
  return (
    <div className="border p-5 rounded shadow-md w-48 text-center">
      <img src={song.foto} alt={song.namaPenyanyi} className="rounded mb-4" />
      <div>
        <h2 className="text-xl font-bold mb-2">{song.namaPenyanyi}</h2>
        <hr className="my-2" />
        <h3 className="text-lg">{song.namaLagu}</h3>
        <h4 className="text-md text-gray-500">{song.band}</h4>
        <p className="text-lg font-semibold mt-2">Price: ${song.harga}</p>
        <button
          className="flex items-center justify-center bg-blue-500 text-white px-3 py-1 mt-2 rounded hover:bg-blue-700"
          onClick={() => addToCart(song)}
        >
          <FaPlusCircle className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
