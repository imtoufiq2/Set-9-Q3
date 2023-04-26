import { useGlobalHook } from "./Contexts";
import { NavLink } from "react-router-dom";
const Menu = () => {
  const { data, addToCart, cart } = useGlobalHook();

  const isAdded = (book) => {
    return cart.includes(book);
  };
  return (
    <div className="container">
      <h1>Menu Page</h1>
      <div className="grid">
        {data.map((cur) => {
          return (
            <div
              className="card"
              style={{
                border: "2px solid red",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              }}
              key={cur.id}
            >
              <img src={cur.image} alt={cur.name} />
              <h2>Name: {cur.name}</h2>
              <p>Description: {cur.description}</p>
              <h3>Price: {cur.price}</h3>
              <p>Delivery_time: {cur.delivery_time}</p>

              {isAdded(cur) ? (
                <NavLink to="/card">
                  <button>Go to Cart</button>
                </NavLink>
              ) : (
                <button onClick={() => addToCart(cur)}>Add to Cart</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
