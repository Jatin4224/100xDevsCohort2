import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1746961072878-782f9bfe99f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Ghost",
      artist: "justin",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1693835777292-cf103dcd2324?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "I lived",
      artis: "one republic",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1746961072878-782f9bfe99f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Ghost",
      artist: "justin",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1693835777292-cf103dcd2324?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "I lived",
      artis: "one republic",
      added: false,
    },
  ];
  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1590107616137-6947bc9f713c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYW5jZXxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <Navbar />
        <div className="flex gap-10 mt-32 px-10 flex-wrap">
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
