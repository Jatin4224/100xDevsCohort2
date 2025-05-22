import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
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
