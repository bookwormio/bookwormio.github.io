import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { GITHUB_URL } from "../constants";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" label="Home" />
        <NavLink to="/team" label="Team" />
        <NavLink to="/tutorial" label="Tutorial" />
        <NavLink to="/api" label="API" />
        <NavLink to="/privacy" label="Privacy Policy" />
        <NavLink to={GITHUB_URL} label="GitHub" external/>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  external?: boolean;
}

const NavLink = ({ to, label, external = false }: NavLinkProps) => {
  const location = useLocation();
  const isActive = !external && location.pathname === to;

  if (external) {
    return (
      <a href = {to}
      className="nav-link" 
        rel="noopener noreferrer"
      >
        <div className="nav-content">{label}</div>
      </a>
    );
  }

  return (
    <Link to={to} className={`nav-link ${isActive ? "active" : ""}`}>
      <div className="nav-content">{label}</div>
    </Link>
  );
};

export default Navbar;
