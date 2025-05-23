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
    <div className="w-60 bg-zinc-100 p-12 rounded-md flex flex-col gap-4 shadow-md translate-x-[50%]">
      <div className="w-30 h-30 bg-green-100 rounded-lg shadow-lg">
        <div class="bg-[url('https://i.scdn.co/image/ab67616d00001e0266c218bc75b53a6fa063fc28')] bg-cover bg-center h-full w-full rounded-lg">
          <img
            src={image}
            className="w-full h-full object-cover translate-x-[7%] translate-y-[7%] rounded-lg hover:hidden"
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl leading-none font-semibold">{name}</h3>
        <h6 className="text-sm text-zinc-600">{artist}</h6>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`px-4 py-2 ${
          added === false ? "bg-amber-950" : "bg-green-600"
        } text-white text-sm rounded-sm w-40 flex justify-center items-center translate-x-[50%] -translate-y-[100%]`}
      >
        {added === false ? "Add To Favourites" : "Added"}
      </button>
    </div>
  );
};

export default Card;
