import React from 'react';
import { connect } from 'react-redux';
import ItemComponent from './ItemComponent';
import getVisibleItems from '../selectors/items';
import ItemsListFilter from './ItemsListFilterComponent';

const ItemsListComponent = (props) => (
    <div>
        <h1>Item List</h1>
        <ItemsListFilter />
        {props.items.map((item) => {
            return <ItemComponent key={item.id} {...item} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        items: getVisibleItems(state.items, state.filters)
    }
};

export default connect(mapStateToProps)(ItemsListComponent);

