import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import itemsReducer from '../reducers/items';
import filtersReducer from '../reducers/filters';
import cartReducer from '../reducers/cart';
import authReducer from '../reducers/auth';


export default () => {
    const store = createStore(
        combineReducers({
            items: itemsReducer,
            cart: cartReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        applyMiddleware(thunk)
    );

    return store;
};

