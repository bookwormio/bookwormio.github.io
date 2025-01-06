import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import API from "./routes/API";
import Home from "./routes/Home";
import Privacy from "./routes/Privacy";
import Team from "./routes/Team";
import Tutorial from "./routes/Tutorial";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/api" element={<API />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
