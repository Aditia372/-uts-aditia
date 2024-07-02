/* eslint-disable react/prop-types */
import { FaEdit, FaTrash, FaInfoCircle, FaStar } from 'react-icons/fa';
import { useState } from 'react';

function MovieItem({ movie, onEdit, onDelete }) {
  const [liked, setLiked] = useState(false);

  const handleInfoClick = () => {
    window.alert(`Title: ${movie.title}\nGenre: ${movie.genre}\nDurasi: ${movie.durasi}\nSinopsis: ${movie.sinopsis}`);
  };

  const handleDeleteClick = () => {
    const isConfirmed = window.confirm('Are you sure you want to delete this movie?');
    if (isConfirmed) {
      onDelete(movie.id);
    }
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const renderStars = () => {
    return (
      <FaStar
        className={`text-yellow-500 cursor-pointer ${liked ? 'text-yellow-400' : ''}`}
        onClick={handleLikeClick}
      />
    );
  };

  const renderLikeIcon = () => {
    return (
      <button
        onClick={handleLikeClick}
        className={`p-2 ml-2 transition duration-300 ${liked ? 'text-red-500 hover:text-red-600' : 'text-gray-500 hover:text-red-600'}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 4c3.866 0 7 3.134 7 7 0 3.866-3.134 7-7 7s-7-3.134-7-7c0-3.866 3.134-7 7-7z"
          />
        </svg>
      </button>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
        <div className="absolute top-0 right-0 mt-2 mr-2 flex items-center">
          {renderStars()}
          <p className="text-gray-700 ml-1 font-bold">{movie.tahun}</p>
        </div>
        <div className="flex mt-4">
          <button
            onClick={() => onEdit(movie)}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 mr-2 transition duration-300"
          >
            <FaEdit />
          </button>
          <button
            onClick={handleDeleteClick}
            className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition duration-300"
          >
            <FaTrash />
          </button>
          <button
            onClick={handleInfoClick}
            className="bg-gray-500 hover:bg-gray-600 text-white rounded-full p-2 ml-2 transition duration-300"
          >
            <FaInfoCircle />
          </button>
          {renderLikeIcon()}
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
