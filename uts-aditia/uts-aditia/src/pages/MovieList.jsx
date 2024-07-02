import  { useState, useEffect } from "react";
import MovieItem from "../components/MovieItem";
import MovieForm from "../components/MovieForm";
import { PlusCircle } from "lucide-react";

const initialMovies = [
  {
    id: 1,
    title: "THE ANNETTE SHOW",
    tahun: 2015,
    genre: "Drama, Musikal",
    durasi: "2h 55m",
    image:
      "https://assets.mubicdn.net/images/notebook/post_images/33421/images-w1400.jpg?1625400709",
    sinopsis:
      "Annette adalah film drama musikal tahun 2021 yang disutradarai oleh Leos Carax, dibintangi oleh Adam Driver dan Marion Cotillard. Film ini mengisahkan tentang pasangan selebriti yang hidupnya berubah drastis setelah kelahiran anak mereka, Annette, yang memiliki bakat luar biasa.",
  },
  {
    id: 2,
    title: "GUARDIANS GALAXY",
    tahun: 2005,
    durasi: "2h 22m",
    genre: "Drama, Action",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.e-u6bCm_Q-lfteh95z21UAHaLJ&pid=Api&P=0&h=180",
    sinopsis:
      "Guardians of the Galaxy adalah film superhero tahun 2014 dari Marvel Studios. Film ini mengikuti petualangan Peter Quill, yang menyebut dirinya Star-Lord, setelah mencuri sebuah bola misterius. Quill kemudian bergabung dengan sekelompok misfits - Gamora, Drax, Rocket, dan Groot - untuk melindungi bola itu dari musuh yang ingin menguasai alam semesta. Bersama-sama, mereka menjadi tim pahlawan tak terduga yang dikenal sebagai Guardians of the Galaxy.",
  },
  {
    id: 3,
    title: "ROBIN HOOD",
    tahun: 2017,
    durasi: "2h 32m",
    genre: "Action, Drama",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.IJyFjWTPbMBwbKvy4svY4gHaK-&pid=Api&P=0&h=180",
    sinopsis:
      "Robin Hood adalah kisah legendaris tentang seorang pemanah ulung yang tinggal di Hutan Sherwood, dekat Nottingham. Robin Hood, bersama dengan kelompoknya yang dikenal sebagai Merry Men, mencuri dari orang kaya untuk membantu orang miskin. Ia sering digambarkan sebagai musuh dari Sheriff Nottingham yang korup. Cerita ini menyoroti tema keadilan, keberanian, dan perlindungan terhadap yang tertindas.",
  },
  {
    id: 4,
    title: "AVATAR",
    tahun: 1974,
    genre: "Drama, Action",
    durasi: "2h 55m",
    image:
      "https://images6.fanpop.com/image/photos/38800000/Avatar-movie-poster-avatar-38807326-800-1185.jpg",
    sinopsis:
      "Avatar adalah film fiksi ilmiah tahun 2009 yang disutradarai oleh James Cameron. Film ini mengikuti Jake Sully, seorang mantan marinir yang dikirim ke bulan Pandora yang dihuni oleh suku Na'vi. Menggunakan tubuh avatar, Jake berbaur dengan suku tersebut untuk memperoleh informasi bagi perusahaan yang ingin menambang mineral berharga. Namun, Jake segera memihak suku Na'vi dalam perjuangan mereka melawan eksploitasi dan penghancuran habitat mereka oleh manusia.",
  },
  {
    id: 5,
    title: "THE ASSASSIN",
    tahun: 1999,
    genre: "Action, Adventure",
    durasi: "2h 32m",
    image:
      "https://assets.mubi.com/images/notebook/post_images/19893/images-w1400.jpg?1449196747",
    sinopsis:
      "The Assassin adalah film drama seni bela diri tahun 2015 yang disutradarai oleh Hou Hsiao-Hsien. Film ini mengisahkan Nie Yinniang, seorang pembunuh wanita yang terlatih dengan baik dalam seni bela diri. Diberi tugas untuk membunuh sepupunya sendiri, Tian Ji'an, seorang gubernur militer yang kuat dan korup, Nie Yinniang harus menghadapi konflik internal antara tugas profesionalnya dan nilai-nilai kemanusiaan yang lebih tinggi. Film ini terkenal dengan visualnya yang memukau dan pendekatannya yang mendalam terhadap karakter dan alur cerita.",
  },
  {
    id: 6,
    title: "THE LOST CITY OF Z",
    tahun: 2003,
    genre: "Action, Adventure",
    durasi: "2h 32m",
    image: "https://wallpapercave.com/wp/wp10941904.jpg",
    sinopsis:
      "The Lost City of Z (2016): Film ini disutradarai oleh James Gray dan berdasarkan buku non-fiksi berjudul sama karya David Grann. Mengisahkan petualangan seorang penjelajah Inggris, Percy Fawcett, yang mencari kota kuno legendaris di Amazon.",
  },
  {
    id: 7,
    title: "ALADDIN",
    tahun: 2009,
    genre: "Action, Adventure",
    durasi: "2h 32m",
    image:
      "https://webneel.com/daily/sites/default/files/images/daily/09-2019/2-movie-poster-design-aladdin-disney-glossy-composite.jpg",
    sinopsis:
      "Aladdin adalah film fantasi musikal Disney yang mengisahkan tentang Aladdin, seorang pemuda jalanan yang menemukan lampu ajaib berisi jin yang dapat mengabulkan tiga permintaan. Dengan bantuan jin yang cerdik dan karpet terbang, Aladdin berusaha memenangkan hati Putri Jasmine sambil menghadapi penasihat jahat, Jafar, yang juga mengincar kekuasaan lampu ajaib.",
  },
  {
    id: 8,
    title: "MONSTER HOUSE",
    tahun: 2021,
    genre: "Action, Horror",
    durasi: "2h 32m",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/61da8438155793.57575971afe13.jpg",
    sinopsis:
      "Monster House adalah film animasi komedi horor tahun 2006 yang disutradarai oleh Gil Kenan. Ceritanya mengisahkan tentang tiga remaja yang curiga terhadap rumah tetangga mereka yang tampaknya hidup dan menakutkan. Mereka menemukan bahwa rumah tersebut sebenarnya adalah makhluk hidup yang lapar akan jiwa-jiwa anak-anak. Bersama dengan seorang pengasuh, mereka berusaha mengungkap misteri di balik rumah monster ini sebelum terlambat.",
  },
  // Add more initial movies here
];

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortByTitle, setSortByTitle] = useState("");
  const [sortByYear, setSortByYear] = useState("");
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

    if (selectedGenre) {
      filteredData = filteredData.filter(
        (movie) => movie.genre === selectedGenre
      );
    }

    if (sortByTitle) {
      filteredData.sort((a, b) =>
        sortByTitle === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title)
      );
    }

    if (sortByYear) {
      filteredData.sort((a, b) =>
        sortByYear === "asc" ? a.tahun - b.tahun : b.tahun - a.tahun
      );
    }

    setFilteredMovies(filteredData);
  }, [searchQuery, selectedGenre, sortByTitle, sortByYear, movies]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies"));
    if (storedMovies) {
      setMovies(storedMovies);
    } else {
      setMovies(initialMovies);
    }
  }, []);

  const updateLocalStorage = (updatedMovies) => {
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };

  const handleAddMovie = (movie) => {
    const newId = movies.length ? movies[movies.length - 1].id + 1 : 1;
    const movieToAdd = {
      ...movie,
      id: newId,
    };
    const updatedMovies = [...movies, movieToAdd];
    setMovies(updatedMovies);
    updateLocalStorage(updatedMovies);
    setIsFormVisible(false);
  };

  const handleUpdateMovie = (updatedMovie) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === updatedMovie.id ? updatedMovie : movie
    );
    setMovies(updatedMovies);
    updateLocalStorage(updatedMovies);
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
          value={selectedGenre}
          className="border border-gray-300 rounded p-2 w-full md:w-1/4 transition duration-300 focus:border-blue-500"
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Musikal">Musikal</option>
          <option value="Adventure">Adventure</option>
          <option value="Horror">Horror</option>
        </select>
        <select
          value={sortByTitle}
          className="border border-gray-300 rounded p-2 w-full md:w-1/4 transition duration-300 focus:border-blue-500"
          onChange={(e) => setSortByTitle(e.target.value)}
        >
          <option value="">Sort by Title</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select
          value={sortByYear}
          className="border border-gray-300 rounded p-2 w-full md:w-1/4 transition duration-300 focus:border-blue-500"
          onChange={(e) => setSortByYear(e.target.value)}
        >
          <option value="">Sort by Year</option>
          <option value="asc">Oldest to Newest</option>
          <option value="desc">Newest to Oldest</option>
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
