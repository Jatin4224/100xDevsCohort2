import React from "react";
import styles from "./style.module.css";
const Navbar = ({ values }) => {
  return (
    <div className="w-full h-22 px-20 py-3 flex justify-end items-center gap-4 bg-zinc-700">
      <div className="flex justify-center items-center h-6 w-30 px-4 bg-amber-950 text-white rounded-md text-sm gap-2">
        <h3>Favourites</h3>
        <h4>{values.filter((item) => item.added).length}</h4>
      </div>
      <h3 className="text-xl font-semibold text-teal-2000 bg-zinc-700">
        PSYTRANCE 2017
      </h3>
      <h3 className={styles.a}>VOLUME 01</h3>
    </div>
  );
};

export default Navbar;
