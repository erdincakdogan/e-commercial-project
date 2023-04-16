import "./styles/App.css";
import Products from "./components/Products/Products.jsx";
import { useState, createContext, useContext } from "react";

export const Context = createContext();
const App = () => {
  const [cart, setCart] = useState([]);
  const [title, setTitle] = useState("hello title");

  return (
    <div className="App">
      <Context.Provider value={[cart, setCart]}>
        <Products />
      </Context.Provider>
    </div>
  );
};

export default App;
