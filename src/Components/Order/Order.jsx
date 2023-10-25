import React, { useState } from 'react';

import { Link, useLoaderData } from 'react-router-dom';

import "./Order.css"
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

import ReviewsItems from '../ReviewsItems/ReviewsItems';


const Orders = () => {
const savedCart = useLoaderData();
const [cart, setCart] = useState(savedCart);


// console.log(savedCart);

const handleRemoveFromCart = (id) =>{
    const remaining = cart.filter(product => product.id !== id)
    setCart(remaining);
    removeFromDb(id);
}

    const  handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-cart'>
                {
                    cart.map(product => <ReviewsItems
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewsItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart

                 cart={cart}
                 handleClearCart={ handleClearCart}
                >
                    <Link className='proceed-link' to="/proceedChaker">
                        <button className='btn-proceed'>
                            Proceed cheker
                            
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;