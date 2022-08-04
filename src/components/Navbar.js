import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav">
        <li className="nav__item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Add Techno
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/list"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            All Technos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
