import { useState } from "react";
import "./App.css";
import Register from "./components/register";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
