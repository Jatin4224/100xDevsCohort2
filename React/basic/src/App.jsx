import { useState } from "react";
import Box from "./components/box";
import "./index.css";

function App() {
  const [val, setVal] = useState({ name: "jatin", isBanned: false });

  return (
    <>
      <div class="App">
        <h1 className="bg-amber-300">name: {val.name}</h1>
        <h2>banned:{val.isBanned.toString()}</h2>
        <button
          className={`${val.isBanned ? "bg-amber-300" : "bg-amber-700"} `}
          onClick={() => {
            setVal({ ...val, isBanned: !val.isBanned });
          }}
        >
          click me
        </button>
      </div>
    </>
  );
}

export default App;
