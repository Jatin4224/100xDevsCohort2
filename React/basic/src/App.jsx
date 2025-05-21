import { useState } from "react";
import Box from "./components/box";
import "./index.css";

function App() {
  const [val, setVal] = useState([
    { name: "jatin", age: 24 },
    { name: "kohli", age: 25 },
    { name: "sachin", age: 42 },
  ]);
  return (
    <>
      <div>
        {val.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
          </div>
        ))}
        <button
          onClick={() =>
            setVal(() =>
              val.map((item) =>
                item.name === "sachin" ? { name: "sachin", age: 50 } : item
              )
            )
          }
        >
          click me
        </button>
      </div>
    </>
  );
}

export default App;
