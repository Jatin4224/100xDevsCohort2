import React from "react";

export const SideBar = () => {
  return (
    <div className="p-5 sahdow-lg bg-white w-40 flex flex-col justify-center items-start overflow-hidden">
      <h1 className="text-bold font-extrabold ">SUBSCRIBTION</h1>
      <ul>
        <li>Music</li>
        <li>Videos</li>
        <li>Shorts</li>
      </ul>
      <h1 className="text-bold font-extrabold ">WATCH LATER</h1>
      <ul>
        <li>TV</li>
        <li>News</li>
        <li>sports</li>
      </ul>
    </div>
  );
};
