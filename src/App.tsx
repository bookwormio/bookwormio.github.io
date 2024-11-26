import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Team from "./routes/Team";
import Download from "./routes/Download";
import Tutorial from "./routes/Tutorial";
import API from "./routes/API";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/download" element={<Download />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/api" element={<API />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
