import  { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Song } from "./Song"; // Import komponen Song
import { Cart } from "./Cart"; // Import komponen Cart

const songs = [
    {
      id: 1,
      namaPenyanyi: "Bruno Mars",
      namaLagu: "Talking to The Moon",
      band: "Bruno Mars",
      foto: "./1.jpg",
      harga: 5000000,
      category: "Pop"
    },
    {
      id: 3,
      namaPenyanyi: "Billie Eilish",
      namaLagu: "When The Parties Over",
      band: "Billie Eilish",
      foto: "./3.jpg",
      harga: 5000000,
      category: "Pop"
    },
    {
      id: 4,
      namaPenyanyi: "Jhon Legend",
      namaLagu: "All of Me",
      band: "Jhon Legend",
      foto: "./4.jpg",
      harga: 5000000,
      category: "R&B"
    },
    {
      id: 5,
      namaPenyanyi: "Judika",
      namaLagu: "Aku yang Tersakiti",
      band: "Judika",
      foto: "./5.jpg",
      harga: 5000000,
      category: "Pop"
    },
    {
      id: 6,
      namaPenyanyi: "Lyodra Ginting",
      namaLagu: "Terlanjur Mencinta",
      band: "Lyodra",
      foto: "./6.jpeg",
      harga: 5000000,
      category: "Pop"
    },
    {
      id: 8,
      namaPenyanyi: "Dunchan Laurence",
      namaLagu: "Arcade",
      band: "Dunchan",
      foto: "./8.jpg",
      harga: 5000000,
      category: "Pop"
    },
    {
      id: 9,
      namaPenyanyi: "Yoasobi",
      namaLagu: "Monster",
      band: "Yoasobi",
      foto: "./9.jpg",
      harga: 5000000,
      category: "Pop"
    },
    {
      id: 10,
      namaPenyanyi: "Ikimonogatari",
      namaLagu: "Blue Bird",
      band: "Lisa",
      foto: "./10.jpg",
      harga: 5000000,
      category: "J-Pop"
    }
  ];

export function MyList() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("harga");
  const [sortOrder, setSortOrder] = useState("asc");

  const addToCart = (song) => {
    setCart(prevCart => {
      const existingSongIndex = prevCart.findIndex(s => s.id === song.id);
      if (existingSongIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingSongIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...song, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (songId) => {
    setCart(prevCart => prevCart.filter(song => song.id !== songId));
  };

  const updateQuantity = (songId, quantity) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(song => {
        if (song.id === songId) {
          return { ...song, quantity };
        }
        return song;
      });
      return updatedCart;
    });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setSortOrder(order => order === "asc" ? "desc" : "asc");
  };

  const filteredSongs = songs.filter(song => {
    if (selectedCategory === "All") {
      return song;
    } else {
      return song.category === selectedCategory;
    }
  }).filter(song => {
    return song.namaPenyanyi.toLowerCase().includes(searchTerm.toLowerCase()) || song.namaLagu.toLowerCase().includes(searchTerm.toLowerCase());
  }).sort((a, b) => {
    const order = sortOrder === "asc" ? 1 : -1;
    if (sortBy === "harga") {
      return order * (a.harga - b.harga);
    } else {
      // Add additional sort criteria here if needed
      return 0;
    }
  });

  return (
    <div className="p-5 font-sans">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Song List</h1>
        <div className="relative">
          <button
            className="relative bg-blue-500 text-white p-2 rounded-full focus:outline-none"
            onClick={() => setShowCart(!showCart)}
          >
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
              {cart.reduce((total, song) => total + song.quantity, 0)}
            </span>
          </button>
          {showCart && <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}
        </div>
      </div>

      <div className="flex mb-5">
        <input
          type="text"
          placeholder="Search by artist or song"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-l mr-2 focus:outline-none"
        />
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="p-2 border border-gray-300 rounded-r focus:outline-none mr-2"
        >
          <option value="All">All Categories</option>
          <option value="Pop">Pop</option>
          <option value="R&B">R&B</option>
          <option value="J-Pop">J-Pop</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="p-2 border border-gray-300 rounded-r focus:outline-none"
        >
          <option value="harga">Sort by Price</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border border-gray-300 rounded-r focus:outline-none"
        >
          <option value="asc">Lowest to Highest</option>
          <option value="desc">Highest to Lowest</option>
        </select>
      </div>

      <ul className="flex flex-wrap gap-5">
        {filteredSongs.map((song) => (
          <Song key={song.id} song={song} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
}
