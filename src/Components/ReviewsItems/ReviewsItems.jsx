import React from 'react';
import "./ReviewsItems.css"


const ReviewsItems = ({product, handleRemoveFromCart}) => {
    // console.log(product);
    return (
        <div className='review-item'>
            <img src={product.img} alt="" />
            <div className='review-details'>
                <p className='review-title'>{product.name}</p>
                <p>Price:<span className='review-color-name'>${product.price}</span></p>
                <p>Quantity:<span className='review-color-name'>${product.price}</span></p>

            </div>
            <button onClick={() =>handleRemoveFromCart(product.id)} className='review-btn'>
                 faTrashAlt
            </button>
        </div>
    );
};

export default ReviewsItems;