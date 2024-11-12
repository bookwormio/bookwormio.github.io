import React from "react";
import "../App.css";
import { UsersContainer } from "../components/UserInfo/UsersContainer";
import { users } from "../data/teamData";

const Team = () => {
  return (
    <div className="App">
      <header className="App-header">
        <UsersContainer users={users} />
      </header>
    </div>
  );
};
export default Team;
