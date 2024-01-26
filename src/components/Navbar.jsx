import { useState } from "react";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="h-[5rem] border flex md:items-center justify-between">
      <div className="w-full xs:flex justify-between items-center">
        <h1 className="text-yellow-600 text-start font-Recursive text-3xl leading-[5rem] ml-8 font-bold">
          LIJO
        </h1>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain md:hidden lg:hidden mr-8"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div className="xs:hidden md:flex lg:flex items-center">
        <button
          className="font-Recursive mr-4 font-semibold hover:text-amber-600"
          onClick={handleLogout}
        >
          logout
        </button>
        <p className="font-Recursive mr-4 font-semibold">
          {localStorage.getItem("username")}
        </p>
        <div
          className="h-[50px] w-[50px] bg-blue-400 border border-black rounded-full mr-8"
          onClick={() => setIsHovered((prev) => !prev)}
        ></div>
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl transition-all ease-out`}
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div className="h-[50px] w-[50px] bg-blue-400 border border-black rounded-full"></div>

          <p className="font-Recursive text-white font-semibold mt-2">
            {localStorage.getItem("username")}
          </p>
          <p className="font-Recursive text-white font-semibold mt-2">
            {localStorage.getItem("userEmail")}
          </p>
          <button
            className="font-Recursive text-white mt-2 font-semibold hover:text-amber-600"
            onClick={handleLogout}
          >
            logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
