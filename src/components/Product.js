import React from 'react'
import '../styles/Product.css'


function Product({id, price,title, image}) {
 console.log(image)
    return (
    <div className='product'>
        <div className='product-info'>
            <p>{title}</p>
            <p className='product-price'>
                <small>$</small>
                <strong>{price}</strong>
                </p>
          
        </div>
        <img src={image} alt='product-imag'/>
        <button>Add to Basket</button>
        </div>
  )
}

export default Product