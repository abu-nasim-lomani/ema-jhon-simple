import React from 'react';
import './Product.css'


const Product = (props) => {
    const {name, img, seller, price, stock}=props.product;
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4 className='product-name'>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p><strong>${price}</strong></p>
                <p><small>Only {stock} left in Stock- order soon</small></p>
                <button className='buy-button' onClick={()=>props.handleAddProduct(props.product)}><i className="fa fa-shopping-cart"></i> Buy Now</button>
            </div>
        </div>
    );
};

export default Product;