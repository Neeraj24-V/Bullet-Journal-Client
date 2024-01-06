import React from "react";
import imgSrc from "../assets/login_bg.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      alert("Please fill out all fields");
      return;
    }
    const response = await axios.post(
      "http://localhost:8080/api/v1/journal/auth/login",
      formData,
    );
    console.log(response);
    const { username, id } = response.data.payload.user;
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userEmail", response.data.payload.user.email);
    localStorage.setItem("username", username);
    localStorage.setItem("id", id);
    if (response.status === 200) {
      navigate("/journal");
    }
  }

  return (
    <section className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[25%] left-[10%] w-[70%] flex flex-col">
          <h1 className="text-4xl text-white font-Recursive font-bold">
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

      <div className="w-1/2 h-full bg-white flex flex-col justify-center items-center p-20">
        <div className="w-[70%] flex flex-col p-8 shadow-xl">
          <h3 className="mb-4 text-2xl font-semibold font-Recursive">Login</h3>
          <p className="text-sm mb-2 font-sans">Please enter your details</p>

          <div className="mt-10 w-full flex flex-col">
            <input
              type="text"
              placeholder="Email"
              id="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              className="outline-none bg-transparent py-2 px-4 w-full mt-2 border-b border-black placeholder:text-slate-400 font-Recursive placeholder:font-normal"
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              className="outline-none py-2 px-4 w-full mt-3 placeholder:text-slate-400 border-b border-black font-semibold font-Recursive placeholder:font-normal"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="font-Recursive text-center w-full font-semibold mt-10 bg-black py-2 text-white hover:bg-yellow-600"
            >
              Login
            </button>
            <p className="text-[12px] mt-2 text-center text-slate-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className=" text-black font-Recursive font-semibold hover:underline hover:text-yellow-600"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
