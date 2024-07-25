// import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Movie Website</h1>
      <Link to="/movies">
        <button>View Movies</button>
      </Link>
    </div>
  );
}

export default Home;