import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-lg">
          <Link to="/" className="hover:text-gray-300">GALAXY UTS REACT</Link>
        </div>

        {/* Navigasi */}
        <nav className="hidden md:flex">
          <ul className="flex items-center">
            <li className="mx-4">
              <Link to="/" className="text-white hover:text-gray-300">Beranda</Link>
            </li>
            <li className="mx-4">
              <Link to="/about" className="text-white hover:text-gray-300">Tentang</Link>
            </li>
            <li className="mx-4">
              <Link to="/film" className="text-white hover:text-gray-300">Film</Link>
            </li>
            <li className="mx-4">
              <Link to="/contact" className="text-white hover:text-gray-300">Kontak</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center">
          <Link to="/signup">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Daftar
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
