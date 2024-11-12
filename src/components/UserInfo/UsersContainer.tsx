import React from "react";
import UserInfoBox, { User } from "./UserInfoBox";
import "./UsersContainer.css";

export const UsersContainer = ({ users }: { users: User[] }) => {
  return (
    <div className="users-container">
      {users.map((user, index) => (
        <UserInfoBox key={index} user={user} />
      ))}
    </div>
  );
};
