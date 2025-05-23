import { useRef } from "react";
import "./index.css";
function App() {
  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.current.value, age.current.value, email.current.value);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input ref={name} type="text" placeholder="name" />
        <input ref={age} type="text" placeholder="age" />
        <input ref={email} type="text" placeholder="email" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
