import { useGlobalHook } from "./Contexts";

const Card = () => {
  const { cart } = useGlobalHook();
  let totalCartPrice = cart.reduce((ac, cur) => {
    return ac + cur.price;
  }, 0);
  const totalDelTime = cart.reduce((ac, cur) => {
    return ac + cur.delivery_time;
  }, 0);
  const applyCopons = (totalCartPrice) => {
    return totalCartPrice - 5;
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textDecoration: "underline" }}>Cart Page</h1>
      <h1>Total Delivery Time : {totalDelTime}</h1>
      <h2>Total Price: &#x20b9; {totalCartPrice}</h2>
      <button onClick={() => applyCopons(totalCartPrice)}> Apply copons</button>
      <hr />
      <div className="container">
        <div className="grid">
          {cart.map((cur) => {
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

                {/* {isAdded(cur) ? (
                <NavLink to="/card">
                  <button>Go to Cart</button>
                </NavLink>
              ) : (
                <button onClick={() => addToCart(cur)}>Add to Cart</button>
              )} */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
