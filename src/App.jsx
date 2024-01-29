import { useState } from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Content from "./components/Content";
import Page from "./components/Page";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Authentication";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/journal" element={<Auth Component={Content} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/journal/test" element={<Auth Component={Page} />} />
      </Routes>
      <ToastContainer
        position={window.innerWidth > 768 ? "bottom-right" : "bottom-center"}
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition:Slide
      />
      <SpeedInsights />
    </>
  );
}

export default App;
