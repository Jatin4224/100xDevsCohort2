import { motion } from "motion/react";
const App = () => {
  return (
    <div className="[perspective::1000px] [transform-style:preserve-3d] flex items-center justify-center min-h-screen bg-gray-800">
      <motion.button
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
          y: -5,
        }}
        style={{ translateZ: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative rounded-lg px-20 py-10 text-xl font-semibold text-gray-300 bg-black  shadow-lg hover:text-white "
      >
        Subscribe
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-cyan-500 rounded-lg"></span>
      </motion.button>
    </div>
  );
};

export default App;
