import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => (
    <div>
        <h1>Cart Page</h1> 
        <p>here goes list of items</p>
        <p>with total price</p>
        <Link to="/checkout">Checkout</Link>
    </div>
);

export default Cart;