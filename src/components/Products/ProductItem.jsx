import { useState, useContext } from "react";
import { Context } from "../../App";

import "../../styles/ProductItem.css";

const ProductItem = ({ product }) => {
  const [context, setContext] = useContext(Context);
  const addToCart = (item) => {
    console.log(item);
    setContext([...context, item]);
  };

  return (
    <div className="product-item">
      <div className="product-top">
        <img className="product-img" src={product.productImage} alt="" />
      </div>
      <div className="product-bottom">
        <span className="product-title">{product.productName}</span>
        <span className="product-price"> {product.price}$</span>
        <br />
        <span>
          <button onClick={() => addToCart(product)}>Add to Basket</button>
        </span>
      </div>

      <br />
      <div>{context.count}</div>
    </div>
  );
};

export default ProductItem;
