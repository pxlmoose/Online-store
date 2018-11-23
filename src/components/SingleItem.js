import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem } from '../actions/items';

const SingleItem = ({ name, description, price, dispatch, id }) => (
    <div>
        <Link to={`/item/${id}`}>
            <h3>{name}</h3>
        </Link>
        <p>{description} - {price}</p>
        <button onClick={() => {
            dispatch(removeItem({ id }))
        }}>Remove Item</button>
    </div>
);


export default connect()(SingleItem);   