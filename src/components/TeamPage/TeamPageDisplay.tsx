import { User } from "./UserInfo/UserInfoBox";
import { UsersContainer } from "./UserInfo/UsersContainer";
import bookworm_icon from "../../assets/bookworm_icon.png";
import "./TeamPageDisplay.css";

const TeamPageDisplay = ({ users }: { users: User[] }) => {
  return (
    <div className="team-page">
      <div className="team-content">
        <div className="team-header">
          <h1>
            BookW
            <img src={bookworm_icon} alt="o" />
            rm Team
          </h1>
          <div className="team-subtitle">Meet the developers</div>
        </div>

        <UsersContainer users={users} />
      </div>
    </div>
  );
};

export default TeamPageDisplay;
