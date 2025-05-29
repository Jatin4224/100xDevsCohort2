// import { useState } from "react";
// import Cards from "./components/Cards";
// import Form from "./components/Form";
import "./index.css";
import axios from "axios";
// import Navbar from "./components/Navbar";

function App() {
  const getProducts = () => {
    const api = "https://fakestoreapi.in/api/products";
    axios
      .get(api)
      .then((products) => {
        console.log(products);
      })
      .catch((error) => console.log(error));
  };

  const AddProducts = () => {
    const api = "https://fakestoreapi.in/api/products";
    axios
      .post(api, {
        title: "testing",
        price: 13.5,
        description: "lorem ipsum",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  // const [users, setUsers] = useState([]);

  // const handleFormSubmitData = (data) => {
  //   setUsers([...users, data]);
  // };

  // const handleRemove = (id) => {
  //   setUsers(() => users.filter((item, index) => index != id));
  // };
  return (
    <>
      {/* <div className="w-full h-screen bg-zinc-200 flex items-center justify-center ">
        <div className="container mx-auto "> */}
      {/* <Cards handleRemove={handleRemove} users={users} />
          <Form handleFormSubmitData={handleFormSubmitData} /> */}
      {/* </div> */}
      {/* // </div> */}
      <div>
        <button onClick={getProducts}>call api</button>
        <button onClick={AddProducts}>save new product api</button>
      </div>
    </>
  );
}

export default App;
