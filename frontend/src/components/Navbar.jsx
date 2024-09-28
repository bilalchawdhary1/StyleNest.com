import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const {setShowSearch , getCardCount} = useContext(ShopContext)
  return (
    <div className="py-5 flex items-center justify-between font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className=" w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className=" w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className=" w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className=" w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-5 text-sm text-gray-700">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="hidden absolute group-hover:block">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Order </p>
              <p className="cursor-pointer hover:text-black"> Logout</p>
            </div>
          </div>
        </div>
        <Link className="relative" to="/card">
          <img src={assets.cart_icon} className="w-5 cursor-pointer" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCardCount()}
          </p>
        </Link>
        <img
          onClick={() => setShowDropdown(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* menu-bar for mobile screen */}
      <div
        className={`top-0 absolute right-0 bottom-0 overflow-hidden bg-white transition-all ${
          showDropdown ? "w-full" : "w-0"
        }`}
      >
        <div
          className="flex flex-col text-gray-600"
          onClick={() => setShowDropdown(false)}
        >
          <div className="flex items-center gap-4 p-3">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink className="py-4 pl-6 border" to="/">
            Home
          </NavLink>
          <NavLink className="py-4 pl-6 border" to="/collection">
            Collection
          </NavLink>
          <NavLink className="py-4 pl-6 border" to="/about">
            About
          </NavLink>
          <NavLink className="py-4 pl-6 border" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
