import React from "react";
import imgSrc from "../assets/register_bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    profession: "",
    location: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      profession,
      location,
    } = formData;
    if (
      !firstname ||
      !lastname ||
      !username ||
      !email ||
      !password ||
      !profession ||
      !location
    ) {
      alert("Please fill out all fields");
      return;
    }
    const response = await axios.post(
      "http://localhost:8080/api/v1/journal/auth/register",
      formData
    );
    if (response.status === 201) {
      navigate("/login");
    }
    console.log(response);
  }

  return (
    <section className="w-full h-screen flex items-start">
      <div className="w-1/2 h-full bg-white flex flex-col justify-center items-center p-20">
        <div className="w-[70%] flex flex-col p-8 shadow-xl">
          <h3 className="mb-4 text-2xl font-semibold font-Recursive">
            Register
          </h3>
          <p className="text-sm mb-2 font-sans">Please enter your details</p>

          <div className="mt-10 w-full flex flex-col">
            <input
              type="text"
              placeholder="First Name"
              id="firstname"
              value={formData.firstname}
              onChange={(e) =>
                setFormData({ ...formData, firstname: e.target.value })
              }
              className="outline-none bg-transparent py-2 px-4 w-full mt-2 border-b border-black placeholder:text-slate-400 font-Recursive placeholder:font-normal"
            />
            <input
              type="text"
              placeholder="Last Name"
              id="lastname"
              value={formData.lastname}
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
              className="outline-none bg-transparent py-2 px-4 w-full mt-2 border-b border-black placeholder:text-slate-400 font-Recursive placeholder:font-normal"
            />
            <input
              type="text"
              placeholder="Username"
              id="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="outline-none bg-transparent py-2 px-4 w-full mt-2 border-b border-black placeholder:text-slate-400 font-Recursive placeholder:font-normal"
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="outline-none bg-transparent py-2 px-4 w-full mt-2 border-b border-black placeholder:text-slate-400 font-Recursive placeholder:font-normal"
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="outline-none  py-2 px-4 w-full mt-3 placeholder:text-slate-400 border-b border-black font-Recursive placeholder:font-normal"
            />
            <input
              type="text"
              placeholder="Profession"
              id="profession"
              value={formData.profession}
              onChange={(e) =>
                setFormData({ ...formData, profession: e.target.value })
              }
              className="outline-none  py-2 px-4 w-full mt-3 placeholder:text-slate-400 border-b border-black font-Recursive placeholder:font-normal"
            />
            <input
              type="text"
              placeholder="Location"
              id="location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              className="outline-none  py-2 px-4 w-full mt-3 placeholder:text-slate-400 border-b border-black font-Recursive placeholder:font-normal"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="font-Recursive text-center w-full font-semibold mt-10 bg-yellow-600 py-2 text-white hover:bg-slate-800"
            >
              Register
            </button>
            <p className="text-[12px] mt-2 text-center text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
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
