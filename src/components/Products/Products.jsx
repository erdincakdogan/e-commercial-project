import ProductItem from "./ProductItem";
import "../../styles/Products.css";
import { useState } from "react";
import PRODUCT from "../../product_data";

const Products = ({ cart, setCart, product }) => {
  const [products, setProducts] = useState(PRODUCT);

  return (
    <div className="product-wrapper">
      <h1 className="product-title">Products</h1>
      <div className="products">
        {products.length === 0 ? (
          <p>No Products</p>
        ) : (
          products.map((product) => (
            <ProductItem
              product={product}
              key={product.id}
              products={products}
              setProducts={setProducts}
              cart={cart}
              setCart={setCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
