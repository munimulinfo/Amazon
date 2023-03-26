import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {img,name,price,ratings,seller} = props.product;
    return (
        <div className='product'>
             <img className='images' src={img} alt=""></img>
             <p className="product-name">{name}</p>
             <div>
            <p>Price:{price}</p>
            <p>Seller: {seller}</p>
            <p>Ratings: {ratings}</p>
            </div>
             <button onClick={() => props.handleAddToCart(props.product)} className='cart-btn'>
                <p>Add to Cart</p>
                  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;