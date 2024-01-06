import react from "react";

function Navbar() {
  return (
    <nav className="h-[5rem] border flex items-center justify-between">
      <div>
        <h1 className="text-yellow-600 font-Recursive text-3xl leading-[5rem] ml-8 font-bold">
          Journey
        </h1>
      </div>
      <div className="flex items-center">
        <p className="font-Recursive mr-4 font-semibold">
          {localStorage.getItem("username")}
        </p>
        <div className="h-[50px] w-[50px] bg-blue-400 border border-black rounded-full mr-8"></div>
      </div>
    </nav>
  );
}

export default Navbar;
