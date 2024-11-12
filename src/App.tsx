import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Team from "./routes/Team";
import Download from "./routes/Download";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </>
  );
}

export default App;
