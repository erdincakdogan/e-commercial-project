import { useState } from "react";

import "../../styles/ProductItem.css";
import Counter from "../Counter";
import PRODUCT from "../../product_data";

const ProductItem = ({ product }) => {
  const { id, productName, price, productImage } = product;

  const [counter, setCounter] = useState(Number(price));

  return (
    <div className="product-item">
      <div className="product-image">
        <img className="product-img" src={productImage} alt="" />
      </div>
      <div className="product-detail">
        <span className="product-detail-name">{productName}</span>
        <span>{price}</span>
        <br />
        <span>
          <button>Add to Basket</button>
        </span>
      </div>

      <br />
    </div>
  );
};

export default ProductItem;
