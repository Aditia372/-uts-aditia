import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <ul className="flex gap-4">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/movies" className="hover:text-gray-400">Movies</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
          <li><Link to="/favorite" className="hover:text-gray-400">Favorite</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;