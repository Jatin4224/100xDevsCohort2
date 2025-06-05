import { RiSearchLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
const Navbar = () => {
  return (
    <div>
      <div className="h-20 p-2 flex justify-end items-center gap-4 relative ml-50 ">
        <div className="flex items-center shadow-lg -translate-x-40 ">
          <CiMenuBurger className="h-6 w-6 text-zinc-400 " />
        </div>
        <div className="rounded-sm h-20 w-40 mt-8 shadow-[0_4px_10px_rgba(255,0,0,0.5)]  -translate-x-30">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNBI61LMEEI4izWwfjyZlJHTNgIlktgvuw_g&s"
            className="h-full w-full rounded-lg object-cover"
          ></img>
        </div>

        <input
          className="w-[80%] text-zinc-400 text-bold outline-none focus:outline-none h-12 mt-10 rounded-[80px] shadow-lg"
          placeholder="search anything"
          type="text "
        ></input>
        <div className="p-4 flex items-center  mt-10 mr-120 relative -translate-x-18 ">
          <RiSearchLine className="h-6 w-6 text-zinc-400 " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
