import { useState } from "react";
import Box from "./components/box";
import "./index.css";

function App() {
  const [score, setScore] = useState(0);
  console.log(score);
  return (
    <>
      <div class="App">
        <h1> {score}</h1>

        <button onClick={() => setScore(score + 1)}>onClick</button>
        {/* <Box firstName="jatin" button />
        <Box firstName="Setu" /> */}
      </div>
    </>
  );
}

export default App;
