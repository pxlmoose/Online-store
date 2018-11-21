import React from 'react'
import { connect } from 'react-redux';
import { removeItem } from '../actions/items';

const ItemComponent = ({ name, description, price, dispatch, id }) => (
    <div>
        <h3>{name}</h3>
        <p>{description} - {price}</p>
        <button onClick={() => {
            dispatch(removeItem({ id }))
        }}>Remove Item</button>
    </div>
);

export default connect()(ItemComponent);   