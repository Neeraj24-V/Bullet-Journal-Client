import React from "react";
import { Link } from "react-router-dom"; // If you are using React Router

const LandingPage = () => {
  return (
    <div className="landing-page bg-cover h-screen w-screen">
      <div className="h-[5rem] border">
        <div id="logo" className="">
          <Link to="/">
            <h1 className="text-yellow-600 font-Recursive text-3xl leading-[5rem] ml-8 font-bold">
              LIJO
            </h1>
          </Link>
        </div>
        <div></div>
      </div>
      <h1 className="text-[10rem] text-black font-Recursive text-center">
        Journal
      </h1>
      <p className="font-mono text-center">
        Start Journaling today and Change your Life.
      </p>
      <div className="flex justify-center mt-8">
        <Link to="/login">
          <button className="text-center border border-black py-2 px-8 bg-yellow-600 border-none outline-none font-Recursive font-semibold text-white hover:bg-black shadow-lg">Create</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
