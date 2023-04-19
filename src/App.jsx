import "./styles/App.css";
import Products from "./components/Products/Products.jsx";
import { useState, createContext, useContext } from "react";
import { createBrowserRouter } from "react-router-dom";
import Cart from "./components/Products/Cart";
export const Context = createContext();
const App = () => {
  const [cart, setCart] = useState([]);
  const routes = createBrowserRouter([
    { path: "/", element: <Products /> },
    { path: "/cart", element: <Cart /> }
  ]);

  return (
    <div className="App">
      <Context.Provider value={[cart, setCart]}></Context.Provider>
    </div>
  );
};

export default App;
