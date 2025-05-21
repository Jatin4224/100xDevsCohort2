import { useState } from "react";
import Box from "./components/box";
import "./index.css";

function App() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <>
      <div>
        {val.map((item) => (
          <h1>{item}</h1>
        ))}
        <button
          onClick={() =>
            setVal(() => val.filter((item, index) => index != val.length - 1))
          }
        >
          click me to update the array
        </button>
      </div>
    </>
  );
}

export default App;
