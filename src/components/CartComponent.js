import React from 'react';
import { Link } from 'react-router-dom';

const CartComponent = () => (
    <div>
        <p>Cart Page</p> 
        <Link to="/checkout">Checkout</Link>
    </div>
);

export default CartComponent;