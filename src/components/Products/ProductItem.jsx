import { useState } from "react";
import ProductInfo from "./ProductInfo";
import "../../styles/ProductItem.css";
import Counter from "../Counter";

const ProductItem = ({ product, products, setProducts }) => {
  const { imageUrl, productName, productPrice } = product;

  const [title, setTitle] = useState(productName);
  const [counter, setCounter]=useState(Number(productPrice))


  const clickHandler = () => {
    setTitle("Updated!");
    console.log(productName, "Updated!");
  };

  const deleteHandler = () => {
    setProducts(products.filter((item) => item.id !== product.id));
  };

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <ProductInfo>
        <h2>{title}</h2>
      <Counter
      productPrice={productPrice}
      counter={counter}
      setCounter={setCounter}
      >
        <span>{counter}$</span>

      </Counter>
        <br />
        <button onClick={clickHandler}>Update</button>
        <button onClick={deleteHandler} className="btn-delete">
          Delete
        </button>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
