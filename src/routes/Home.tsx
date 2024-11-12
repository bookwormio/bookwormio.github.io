import React from "react";
import loading_worm from "../loading_worm.gif";
import "../App.css";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={loading_worm} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>BookWorm</code>'s home page DEPLOY.
        </p>
      </header>
    </div>
  );
};
export default Home;
