import React from 'react';
import { connect } from 'react-redux';
import SingleListItem from './SingleListItem';
import getVisibleItems from '../selectors/items';
import ItemsListFilter from './ItemsListFilter';


const ItemsList = (props) => (
    <div className="itemsList">
        <h1>Item List</h1>
        <ItemsListFilter />
        {props.items.map((item) => {
            return <SingleListItem key={item.id} {...item} />
        })}
</div>
);

const mapStateToProps = (state) => {
    return {
        items: getVisibleItems(state.items, state.filters)
    }
};

export default connect(mapStateToProps)(ItemsList);

