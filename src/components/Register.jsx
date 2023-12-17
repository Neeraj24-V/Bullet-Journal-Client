import React from "react";
import imgSrc from "../assets/register_bg.jpg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="w-full h-screen flex items-start">
      
      <div className="w-1/2 h-full bg-white flex flex-col justify-center items-center p-20">
        <div className="w-[70%] flex flex-col p-8 shadow-xl">
          <h3 className="mb-4 text-2xl font-semibold font-Recursive">Register</h3>
          <p className="text-sm mb-2 font-sans">Please enter your details</p>

          <div className="mt-10 w-full flex flex-col">
          <input
              type="text"
              placeholder="First Name"
              id="firstname"
              className="outline-none bg-transparent py-2 px-4 w-full mt-2 border-b border-black placeholder:text-slate-400 font-Recursive placeholder:font-normal"
            />
            <input
              type="text"
              placeholder="Last Name"
              id="lastname"
              className="outline-none bg-transparent py-2 px-4 w-full mt-2 border-b border-black placeholder:text-slate-400 font-Recursive placeholder:font-normal"
            />
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="outline-none bg-transparent py-2 px-4 w-full mt-2 border-b border-black placeholder:text-slate-400 font-Recursive placeholder:font-normal"
            />
            <input
              type="text"
              placeholder="Email"
              id="email"
              className="outline-none bg-transparent py-2 px-4 w-full mt-2 border-b border-black placeholder:text-slate-400 font-Recursive placeholder:font-normal"
            />
            <input
              type="text"
              placeholder="Password"
              id="password"
              className="outline-none  py-2 px-4 w-full mt-3 placeholder:text-slate-400 border-b border-black font-Recursive placeholder:font-normal"
            />
            <input
              type="text"
              placeholder="Profession"
              id="profession"
              className="outline-none  py-2 px-4 w-full mt-3 placeholder:text-slate-400 border-b border-black font-Recursive placeholder:font-normal"
            />
            <input
              type="text"
              placeholder="Location"
              id="location"
              className="outline-none  py-2 px-4 w-full mt-3 placeholder:text-slate-400 border-b border-black font-Recursive placeholder:font-normal"
            />
            <button className="font-Recursive text-center w-full font-semibold mt-10 bg-yellow-600 py-2 text-white hover:bg-slate-800">
              Register
            </button>
            <p className="text-[12px] mt-2 text-center text-slate-400">
              Already have an account?{" "}
              <Link
                to="/"
                className=" text-black font-Recursive font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[25%] left-[10%] w-[70%] flex flex-col">
          <h1 className="text-4xl text-yellow-600 font-Recursive font-bold">
            Journal your ideas and prioritize tasks.
          </h1>
          <p className="mt-2 text-slate-50 font-sans">
            An effective way to weed out distractions and help you gain control
            over your time to be more productive.
          </p>
        </div>
        <img
          src={imgSrc}
          className="w-full h-full object-cover"
          alt="login_background"
        />
      </div>
    </section>
  );
}

export default Register;
