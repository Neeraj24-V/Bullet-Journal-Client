import { useState } from "react";
import "./App.css";
import Register from "./components/register";
import Login from "./components/Login";
import LandingPage from "./components/landingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
