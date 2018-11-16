import React from 'react';
import { connect } from 'react-redux';

const ItemsListComponent = (props) => (
    <div>
        <h1>Item List</h1>
        {props.items.length}
        {props.filters.text}
    </div>
);

const mapStateToProps = (state) => {
    return {
        items: state.items,
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ItemsListComponent);

