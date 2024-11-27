import React from "react";
import "../App.css";
import { users } from "../data/teamData";
import TeamPageDisplay from "../components/TeamPage/TeamPageDisplay";

const Team = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TeamPageDisplay users={users} />
      </header>
    </div>
  );
};
export default Team;
