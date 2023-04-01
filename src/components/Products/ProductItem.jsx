import { useState } from "react";
import ProductInfo from "./ProductInfo";
import "../../styles/ProductItem.css";
import Counter from "../Counter";
import PRODUCT from "../../product_data";

const ProductItem = ({ product, products, setProducts }) => {
  const { id, productName, price, productImage } = product;

  const [title, setTitle] = useState(productName);
  const [counter, setCounter] = useState(Number(price));

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={productImage} alt="" />
      </div>
      <ProductInfo>
        <h2>{title}</h2>

        <br />
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
