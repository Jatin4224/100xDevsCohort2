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

const Card = () => {
  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex flex-col gap-4 shadow-md">
      <div className="w-20 h-20 bg-green-600 rounded-md"></div>
      <div>
        <h3 className="text-xl leading-none font-semibold">Song Name</h3>
        <h6 className="text-sm text-zinc-600">Artist Name</h6>
      </div>
      <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-sm w-40 flex justify-center items-center translate-x-[50%] -translate-y-[100%]">
        Add to Favourites
      </button>
    </div>
  );
};

export default Card;
