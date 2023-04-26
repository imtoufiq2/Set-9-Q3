import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "30vh" }}>
      <h1>Welcome to neoG Food Ordering App</h1>

      <NavLink to="/menu">
        <button
          style={{
            padding: "1rem 2rem ",
            borderRadius: "10px",
            border: "none",
            background: "black",
            color: "white",
          }}
        >
          Menu
        </button>
      </NavLink>
    </div>
  );
};

export default Home;
