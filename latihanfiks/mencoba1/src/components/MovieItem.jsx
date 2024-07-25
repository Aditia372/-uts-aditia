/* eslint-disable react/prop-types */
import { FaEdit, FaTrash, FaInfoCircle, FaStar } from 'react-icons/fa';

function MovieItem({ movie, onEdit, onDelete }) {
  const handleInfoClick = () => {
    window.alert(`Title: ${movie.title}\nRating: ${movie.rating}\nCategory: ${movie.category}`);
  };

  const handleDeleteClick = () => {
    const isConfirmed = window.confirm('Are you sure you want to delete this movie?');
    if (isConfirmed) {
      onDelete(movie.id);
    }
  };

  const renderStars = () => {
    return <FaStar className="text-yellow-500" />;
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
          <p className="text-gray-700 ml-1 font-bold">{movie.rating}</p>
        </div>
        <p>
          <strong>Category:</strong> {movie.category}
        </p>
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
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
