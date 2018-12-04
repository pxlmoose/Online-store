import { createStore, combineReducers, applyMiddleware } from 'redux';
import itemsReducer from '../reducers/items';
import filtersReducer from '../reducers/filters';
import cartReducer from '../reducers/cart';
import thunk from 'redux-thunk';

export default () => {
    const store = createStore(
        combineReducers({
            items: itemsReducer,
            cart: cartReducer,
            filters: filtersReducer
        }),
        applyMiddleware(thunk)
    );

    return store;
};

