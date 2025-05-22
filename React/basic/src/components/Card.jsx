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

const Card = ({ data, handleClick, index }) => {
  const { name, job, image, friends } = data;

  return (
    <div className="w-60 bg-white rounded-md overflow-hidden shadow-lg">
      <div className="w-full h-32 bg-sky-200">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="w-full p-4">
        <h3 className="text-xl font-semibold capitalize">{name}</h3>
        <h5 className="text-sm text-gray-600 capitalize">{job}</h5>
        <button
          onClick={() => handleClick(index)}
          className={`mt-4 px-4 py-1 text-xs font-semibold rounded-sm ${
            friends ? "bg-green-500 text-white" : "bg-blue-500 text-white"
          }`}
        >
          {friends ? "Friends" : "Add Friend"}
        </button>
      </div>
    </div>
  );
};

export default Card;
