import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleItems from '../selectors/items';
import selectTotalPrice from '../selectors/total-price';

export const PriceSummary = ({ totalPrice }) => {
    const formattedTotalPrice = numeral(totalPrice / 100).format('$0,0.00');

    return (
        <div>
            <h1> Total price: {formattedTotalPrice}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visiblePrice = getVisibleItems(state.items, state.filters);

    return {
        totalPrice: selectTotalPrice(visiblePrice)
    };
};

export default connect(mapStateToProps)(PriceSummary)