import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const logoutFn = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="navbarContainer">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activeTab" : "inactiveTab")}
      >
        Home
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) => (isActive ? "activeTab" : "inactiveTab")}
      >
        Trending
      </NavLink>

      <NavLink
        to="/movie"
        className={({ isActive }) => (isActive ? "activeTab" : "inactiveTab")}
      >
        Movie
      </NavLink>

      <NavLink
        to="/game"
        className={({ isActive }) => (isActive ? "activeTab" : "inactiveTab")}
      >
        Game
      </NavLink>

      <button type="button" onClick={logoutFn}>
        Logout
      </button>
    </div>
  );
};

export default NavbarComponent;
