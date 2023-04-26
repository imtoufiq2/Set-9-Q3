import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          padding: " 10px 0",
          justifyContent: "space-around",
          listStyleType: "none",
          background: "black",
          color: "white",
        }}
      >
        <li>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu">
            <button>Menu</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/card">
            <button>Card</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
