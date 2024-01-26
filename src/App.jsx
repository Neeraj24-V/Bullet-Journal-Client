import { useState } from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Content from "./components/Content";
import Page from "./components/Page";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Authentication";

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
    </>
  );
}

export default App;
