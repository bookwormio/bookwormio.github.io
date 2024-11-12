import React from "react";
import loading_worm from "./loading_worm.gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={loading_worm} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>BookWorm</code>'s landing page.
        </p>
      </header>
    </div>
  );
}

export default App;
