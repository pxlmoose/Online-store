import React from 'react'

const ItemComponent = (props) => (
    <div>
        <p>Individual item with id of {props.match.params.id} </p>
    </div>
);

export default ItemComponent;