import React from "react";

const Navbar = () => {
  return (
    <div className="w-full px-20 py-3 flex justify-end items-center gap-4">
      <div className="flex justify-center items-center h-8 px-4 bg-green-600 text-white rounded-md text-sm gap-2">
        <h3>Favourites</h3>
        <h4>2</h4>
      </div>
      <h3 className="text-xl font-semibold text-teal-2000 bg-gray-200">
        TRANCE ONLY
      </h3>
    </div>
  );
};

export default Navbar;
