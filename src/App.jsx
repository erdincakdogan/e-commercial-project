import "./styles/App.css";
import Products from "./components/Products/Products.jsx";
import { useState } from "react";
import Cart from "./components/Products/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const emptyCart = () => {
    setCart([]);
  };
  return (
    <div className="App">
      <Products cart={cart} emptyCart={emptyCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  );
};

export default App;
