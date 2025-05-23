import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  const CardData = [
    {
      image:
        "https://images.unsplash.com/photo-1746961072878-782f9bfe99f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Ghost",
      artist: "justin",
      added: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1693835777292-cf103dcd2324?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "I lived",
      artist: "one republic",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1746961072878-782f9bfe99f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Holy",
      artist: "justin",
      added: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1693835777292-cf103dcd2324?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Forever",
      artist: "one republic",
      added: false,
    },
  ];

  const [data, setData] = useState(CardData);
  const handleClick = (index) => {
    setData((prev) => {
      return prev.map((item, itemindex) => {
        if (itemindex === index) return { ...item, added: !item.added };
        return item;
      });
    });
  };
  return (
    <>
      <div className="w-full min-h-screen bg-cover bg-center bg-zinc-700 flex flex-col gap-20 ">
        <Navbar values={data} />
        <div className="flex gap-10 mt-32 px-10 flex-wrap">
          {data.map((elem, index) => {
            return (
              <Card
                values={elem}
                key={index}
                handleClick={handleClick}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
