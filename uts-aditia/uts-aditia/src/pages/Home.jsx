import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Movie Website</h1>
        <div className="text-center">
          <Link to="/film">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              View Movies
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
