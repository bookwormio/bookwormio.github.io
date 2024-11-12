import React from "react";
// import loading_worm from "./loading_worm.gif";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Team from "./routes/Team";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={loading_worm} className="App-logo" alt="logo" />
    //     <p>
    //       Welcome to <code>BookWorm</code>'s landing page.
    //     </p>
    //   </header>
    // </div>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
