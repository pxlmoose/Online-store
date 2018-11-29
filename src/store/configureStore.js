import { createStore, combineReducers, applyMiddleware } from 'redux';
import itemsReducer from '../reducers/items';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

export default () => {
    const store = createStore(
        combineReducers({
            items: itemsReducer,
            filters: filtersReducer
        }),
        applyMiddleware(thunk)
    );

    return store;
};

