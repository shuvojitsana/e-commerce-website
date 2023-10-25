import React, { useEffect, useState } from 'react'
import './Shop.css';
import Product from '../Products/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{

        fetch('shopping.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);

    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                         key={product.id}
                         product={product}
                         handleAddToCart={handleAddToCart}
                         ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;