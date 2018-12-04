import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PriceSummary from './PriceSummary';
import CartItem from './CartItem';

const Cart = (props) => (
    <div>
        <h1>Items in you cart</h1> 
        {props.cart.map((item) => {
            return <CartItem key={item.id} {...item} />
        })}
        <PriceSummary />
        <Link to="/checkout">Checkout</Link>
    </div>
    //cart will be suscribed to changes in firebase
);

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

export default connect(mapStateToProps)(Cart);