import React, { useState } from 'react'
import '../../styles/ProductForm.css'

const ProductForm = (props) => {
    const [productName, setProductName]= useState('')
    const [productPrice, setProductPrice]=useState('')
    const [imageUrl, setImageUrl]=useState('')
    const titleChangeHandler = (event) => {
        setProductName(event.target.value)
    }
    const priceChangeHandler = (event) => {
        setProductPrice(event.target.value)
    }
    const imageChangeHandler = (event) => {
        setImageUrl(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        
    const newProductData ={
        id: props.products.length +1,
        productName,
        productPrice,
        imageUrl
    }
    props.onSaveProduct(newProductData);
    setProductName("");
    setProductPrice("");
    setImageUrl("");
    }
    
    return (
    <form className='product-form' onSubmit={submitHandler}>
        <div className='product-form-input'>
            <label>Product Name</label>
            <input
            type='text'
            placeholder='Add the Product Name'
            onChange={titleChangeHandler}
            value={productName}></input>
        </div>
        <div className='product-form-input'>
            <label>Product Price</label>
            <input
            type='number'
            placeholder='Add the Product Price'
            onChange={priceChangeHandler}
            value={productPrice}></input>
        </div>
        <div className='product-form-input'>
            <label>Product Image</label>
            <input
            type='text'
            placeholder='Add the Product Image'
            onChange={imageChangeHandler}
            value={imageUrl}></input>
        </div>
        <div className="form-buttons">
            <button className='product-form-button'>Add the Product</button>
            <button
            onClick={()=> props.setIsOpen(false)}
            className='product-form-button-cancel'
            type='button'>Cancel</button>

        </div>
    </form>
  )
}

export default ProductForm