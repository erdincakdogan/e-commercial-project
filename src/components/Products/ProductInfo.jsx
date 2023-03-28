
const ProductInfo = (props) => {
  return (
    <div className="product-info">
        <span className="ad">e-shop data</span>
        {props.children}
    </div>
  )
}

export default ProductInfo