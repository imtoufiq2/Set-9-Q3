import { useEffect } from "react";

import { fakeFetch } from "./Database";
import { useState, useContext, createContext } from "react";

const context = createContext();
const Contexts = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const fetchingData = async () => {
    const { data } = await fakeFetch("https://example.com/api/menu");
    setData(data.menu);
  };
  useEffect(() => {
    fetchingData();
  }, []);
  // Add to cart
  const addToCart = (para) => {
    if (!cart.includes(para)) {
      setCart([...cart, para]);
    }
  };
  console.log(cart);
  return (
    <context.Provider value={{ data, cart, addToCart }}>
      {children}
    </context.Provider>
  );
};
//global hook
const useGlobalHook = () => {
  return useContext(context);
};
export default Contexts;
export { useGlobalHook };
