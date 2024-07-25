import { useState } from "react";
import "./App.css";

const Button = (props) => {
  return (
    <button className={`rounded-md ${props.variant} text-green-200`}>
      {props.children}
    </button>
  );
};
const planets = ["Mercury","Mars", "Bumi"];
function App() {
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
  }

  return (
    <>
      <div className="flex gap-4">
        <h1>{planets[index]}</h1>
        <button onClick={handleClick}>Berikutnya</button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button variant="bg-red-700">Login</Button>
        <Button variant="bg-slate-700">Register</Button>
      </div>
    </>
  );
}

export default App;
