import React, { createContext, useEffect, useState } from "react";
import PRODUCT from "../../product_data";

const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = [];
  for (let i = 0; i < PRODUCT.length; i++) {
    const element = cart[i];
  }
  return element;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
};
return (
  <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>
);
export default ShopContext;
