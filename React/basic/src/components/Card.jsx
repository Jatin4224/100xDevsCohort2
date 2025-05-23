// const Card = ({ data, handleClick, index }) => {
//   const { name, job, image, friends } = data;
//   return (
//     <div className="w-60 h-70  bg-white rounded-md overflow-hidden shadow-lg">
//       <div className="w-full h-32 bg-sky-200">
//         <img classroom="w-full h-full object-cover " src={image} />
//       </div>
//       <div className="w-full p-3 object-cover">
//         <h3 className="text-xl font-semibold">{name}</h3>
//         <h5>{job}</h5>

//         <button
//           onClick={() => handleClick(index)}
//           className="h-6 w-20 px-6 py-2 text-xs text-white bg-blue-500 font-semibold rounded-sm"
//         >
//           {friends === true ? "Friends" : "remove friend"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;
// src/components/Card.jsx
import React from "react";
const Card = ({ values, handleClick, index }) => {
  const { image, name, artist, added } = values;

  return (
    <div className="w-50 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center gap-4 p-6 transition-transform hover:scale-105 duration-300 group">
      {/* Image Container */}
      <div className="relative w-full h-30 bg-gradient-to-br from-green-100 to-green-200 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        {/* Optional background image behind */}
        <div className="absolute inset-0 bg-[url('https://i.scdn.co/image/ab67616d00001e0266c218bc75b53a6fa063fc28')] bg-cover bg-center opacity-20 rounded-xl" />
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-zinc-800">{name}</h3>
        <p className="text-sm text-zinc-500">{artist}</p>
      </div>

      {/* Button */}
      <button
        onClick={() => handleClick(index)}
        className={`mt-2 px-4 py-2 rounded-md text-sm font-medium w-48 transition-colors duration-300
          ${
            added
              ? "bg-green-600 hover:bg-green-700"
              : "bg-amber-700 hover:bg-amber-800"
          } 
          text-white`}
      >
        {added ? "Added" : "Add to Favourites"}
      </button>
    </div>
  );
};

export default Card;
