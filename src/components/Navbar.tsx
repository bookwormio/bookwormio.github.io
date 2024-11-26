import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" label="Home" />
        <NavLink to="/team" label="Team" />
        <NavLink to="/download" label="Download" />
        <NavLink to="/tutorial" label="Tutorial" />
        <NavLink to="/api" label="API" />
      </div>
    </nav>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`nav-link ${isActive ? "active" : ""}`}>
      <div className="nav-content">{label}</div>
    </Link>
  );
};

export default Navbar;
