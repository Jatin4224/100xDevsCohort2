import { RiSearchLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
    console.log("hello");
  };
  return (
    <div className="h-20 px-6 flex items-center justify-between shadow-[0_4px_10px_rgba(255,0,0,0.5)] bg-[#1F1E24] ">
      <div className="flex items-center gap-4">
        <CiMenuBurger
          className="h-6 w-6 text-zinc-500"
          onClick={toggleMenuHandler}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNBI61LMEEI4izWwfjyZlJHTNgIlktgvuw_g&s"
          alt="logo"
          className="h-10 w-10 rounded  object-cover"
        />
      </div>

      <div className="flex items-center w-1/2 relative">
        <input
          type="text"
          placeholder="Search anything"
          className="w-full h-10 pl-6 pr-10 rounded-full text-sm text-zinc-700 outline-none shadow-inner bg-gray-100"
        />
        <RiSearchLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
      </div>
    </div>
  );
};

export default Navbar;
