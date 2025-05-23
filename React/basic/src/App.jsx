import { useForm } from "react-hook-form";
import "./index.css";

function App() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("name")} type="text" placeholder="name" />
        <input {...register("email")} type="text" placeholder="email" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
