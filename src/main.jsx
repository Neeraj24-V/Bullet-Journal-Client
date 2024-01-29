import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <SpeedInsights />
  </BrowserRouter>
);
