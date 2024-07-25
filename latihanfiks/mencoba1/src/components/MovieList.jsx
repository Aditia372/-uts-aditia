import { useState, useEffect } from "react";
import MovieForm from "./MovieForm";
import MovieItem from "./MovieItem";
import { PlusCircle } from "lucide-react";

const initialMovies = [
  {
    id: 1,
    title: "The Godfather",
    rating: 9.2,
    category: "Drama",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.DSCozuVAabLMXEx86PsXbAHaJQ&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    rating: 9.2,
    category: "Drama",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.DSCozuVAabLMXEx86PsXbAHaJQ&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    category: "Action",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.DSCozuVAabLMXEx86PsXbAHaJQ&pid=Api&P=0&h=180",
  },
  // Add more initial movies here
];

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortByName, setSortByName] = useState("");
  const [sortByRating, setSortByRating] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies"));
    if (storedMovies) {
      setMovies(storedMovies);
    } else {
      setMovies(initialMovies);
    }
  }, []);

  useEffect(() => {
    let filteredData = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedCategory) {
      filteredData = filteredData.filter(
        (movie) => movie.category === selectedCategory
      );
    }

    if (sortByName) {
      filteredData.sort((a, b) =>
        sortByName === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title)
      );
    }

    if (sortByRating) {
      filteredData.sort((a, b) =>
        sortByRating === "asc" ? a.rating - b.rating : b.rating - a.rating
      );
    }

    setFilteredMovies(filteredData);
  }, [searchQuery, selectedCategory, sortByName, sortByRating, movies]);

  const handleAddMovie = (movie) => {
    const newId = movies.length ? movies[movies.length - 1].id + 1 : 1;
    const movieToAdd = {
      ...movie,
      id: newId,
      rating: parseFloat(movie.rating),
    };
    const updatedMovies = [...movies, movieToAdd];
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    setIsFormVisible(false);
  };

  const handleUpdateMovie = (updatedMovie) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === updatedMovie.id ? updatedMovie : movie
    );
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    setIsFormVisible(false);
  };

  const handleDeleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };

  const handleEditMovie = (movie) => {
    setCurrentMovie(movie);
    setIsFormVisible(true);
  };

  const handleFormClose = () => {
    setCurrentMovie(null);
    setIsFormVisible(false);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Movie List</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
        <input
          type="text"
          placeholder="Search movies"
          value={searchQuery}
          className="border border-gray-300 rounded p-2 w-full md:w-1/4 transition duration-300 focus:border-blue-500"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={selectedCategory}
          className="border border-gray-300 rounded p-2 w-full md:w-1/4 transition duration-300 focus:border-blue-500"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
        </select>
        <select
          value={sortByName}
          className="border border-gray-300 rounded p-2 w-full md:w-1/4 transition duration-300 focus:border-blue-500"
          onChange={(e) => setSortByName(e.target.value)}
        >
          <option value="">Sort by Name</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select
          value={sortByRating}
          className="border border-gray-300 rounded p-2 w-full md:w-1/4 transition duration-300 focus:border-blue-500"
          onChange={(e) => setSortByRating(e.target.value)}
        >
          <option value="">Sort by Rating</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <button
        onClick={() => setIsFormVisible(true)}
        className="bg-blue-500 text-white rounded p-2 mb-8 flex items-center justify-center gap-2 hover:bg-blue-600 transition duration-300"
      >
        <PlusCircle size={20} />
        Add Movie
      </button>

      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded p-6 w-11/12 md:w-1/2 lg:w-1/3 relative">
            <button
              onClick={handleFormClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ×
            </button>
            <MovieForm
              movie={currentMovie}
              onSave={currentMovie ? handleUpdateMovie : handleAddMovie}
              onClose={handleFormClose}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredMovies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onEdit={handleEditMovie}
            onDelete={handleDeleteMovie}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
