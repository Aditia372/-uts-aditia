import React from "react";
import { FaTimes, FaMinusCircle, FaPlusCircle } from "react-icons/fa";

export function Cart({ cart, removeFromCart, updateQuantity }) {
  return (
    <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-300 rounded shadow-lg z-10">
      <h2 className="p-4 text-lg font-bold border-b">Songs in Cart</h2>
      {cart.map((song) => (
        <div key={song.id} className="relative p-4 border-b flex items-center">
          <img src={song.foto} alt={song.namaPenyanyi} className="w-16 h-16 rounded mr-4" />
          <div className="flex-1">
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              onClick={() => removeFromCart(song.id)}
            >
              <FaTimes />
            </button>
            <h3 className="text-md font-bold">{song.namaPenyanyi} - {song.namaLagu}</h3>
            <div className="flex items-center mt-2">
              <button
                className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                onClick={() => updateQuantity(song.id, song.quantity - 1)}
                disabled={song.quantity === 1}
              >
                <FaMinusCircle />
              </button>
              <span className="mx-3">{song.quantity}</span>
              <button
                className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                onClick={() => updateQuantity(song.id, song.quantity + 1)}
              >
                <FaPlusCircle />
              </button>
            </div>
          </div>
          <p className="text-md font-semibold mt-2 absolute bottom-2 right-2">Total: ${song.quantity * song.harga}</p>
        </div>
      ))}
      <div className="p-4 text-md font-bold border-t flex justify-between">
        <span>Total Price:</span>
        <span>${cart.reduce((total, song) => total + (song.quantity * song.harga), 0)}</span>
      </div>
      <div className="p-4">
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">Go to Checkout</button>
      </div>
    </div>
  );
}
