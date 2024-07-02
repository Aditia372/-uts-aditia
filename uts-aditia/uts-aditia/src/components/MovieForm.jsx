/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';

function MovieForm({ movie, onSave, onClose }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [sinopsis, setSinopsis] = useState('');

  useEffect(() => {
    if (movie) {
      setTitle(movie.title || '');
      setRating(movie.rating !== undefined ? movie.rating.toString() : '');
      setCategory(movie.genre || '');
      setImage(movie.image || '');
      setSinopsis(movie.sinopsis || '');
    } else {
      setTitle('');
      setRating('');
      setCategory('');
      setImage('');
      setSinopsis('');
    }
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMovie = {
      id: movie ? movie.id : null,
      title,
      tahun: parseFloat(rating),
      genre: category,
      image,
      sinopsis,
    };
    onSave(updatedMovie);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter movie title"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Tahun</label>
        <input
          type="number"
          step="0.1"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter movie rating"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Genre</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter movie category"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter image URL"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Sinopsis</label>
        <textarea
          value={sinopsis}
          onChange={(e) => setSinopsis(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter movie sinopsis"
          rows={4}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default MovieForm;
