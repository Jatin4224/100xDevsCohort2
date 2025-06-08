import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "./store/reducers/counterSlice";

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-5xl">Counter: {value}</h1>
      <div className="flex gap-6">
        <button
          className=" border-b-4 hover:text-red-500 "
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="border-b-4 hover:text-red-500"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="border-b-4 hover:text-red-500"
          onClick={() => dispatch(incrementAsync(5))}
        >
          incrementByAmount
        </button>
      </div>
    </>
  );
}

export default App;
