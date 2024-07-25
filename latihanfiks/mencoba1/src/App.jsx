// import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;