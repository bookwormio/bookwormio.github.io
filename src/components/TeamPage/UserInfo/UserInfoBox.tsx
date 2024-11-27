import React from "react";
import "./UserInfoBox.css";

export type User = {
  fullName: string;
  headShotPath: string;
  role: string;
  biography: string;
  email: string;
  linkedIn?: string;
  github?: string;
};

interface UserInfoBoxProps {
  user: User;
}

const UserInfoBox = ({ user }: UserInfoBoxProps) => {
  return (
    <div className="user-info-box">
      <div className="user-info">
        <div className="user-info-header">
          <img
            src={user.headShotPath}
            className="user-info-headshot"
            alt={`${user.fullName}'s headshot`}
          />
          <h1>{user.fullName}</h1>
          <h2>{user.role}</h2>
        </div>
        <div className="user-info-bio">
          <p>{user.biography}</p>
        </div>
      </div>
      <div className="user-info-contact">
        <h3>Contact</h3>
        <div className="user-info-contact-links">
          <a href={`mailto:${user.email}`}>{user.email}</a>
          {user.linkedIn && <a href={user.linkedIn}>LinkedIn</a>}
          {user.github && <a href={user.github}>GitHub</a>}
        </div>
      </div>
    </div>
  );
};
export default UserInfoBox;
