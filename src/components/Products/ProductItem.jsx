import { useState } from "react";

import "../../styles/ProductItem.css";

const ProductItem = ({ product, cart, setCart }) => {
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(setCart);
  };

  return (
    <div className="product-item">
      <div className="product-image">
        <img className="product-img" src={product.productImage} alt="" />
      </div>
      <div className="product-detail">
        <span className="product-detail-name">{product.productName}</span>
        <span> {product.price}$</span>
        <br />
        <span>
          <button onClick={() => addToCart(product)}>Add to Basket</button>
        </span>
      </div>

      <br />
    </div>
  );
};

export default ProductItem;
