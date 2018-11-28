import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SingleListItem = ({ name, description, price, id }) => (
    <div>
        <Link to={`/item/${id}`}>
            <h3>{name}</h3>
        </Link>
        <p>{description} - {price}</p>
    </div>
);


export default connect()(SingleListItem);  