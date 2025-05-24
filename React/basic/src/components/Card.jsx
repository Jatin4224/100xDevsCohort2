import React from "react";

const Card = () => {
  return (
    <div className="w-42 h-[30vh] bg-zinc-100 rounded-lg padding flex flex-col items-center gap-2">
      <div className=" w-[4vw] h-[3vw] rounded-sm bg-zinc-200 overflow-hidden">
        <img className="w-full h-full object-cover" src="" alt="" />
      </div>
      <h1 className="mt-1 text-xl font-semibold">Jatin</h1>
      <p className="mt-1 text-center text-xs font-semibold leading-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        error.
      </p>
      <button className="padding-button bg-red-500 text-xs rounded-sm font-semibold text-white mt-4">
        Remove it
      </button>
    </div>
  );
};

export default Card;
