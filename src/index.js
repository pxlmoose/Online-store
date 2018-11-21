import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addItem } from './actions/items';
import getVisibleItems from './selectors/items';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore(); 

store.dispatch(addItem({ name: 'cool design', description: 'this is the cool design', price: 1000}));
store.dispatch(addItem({ name: 'fancy design', description: 'fancy and pricy design', price: 1000000}));
store.dispatch(addItem({ name: 'lazy design', description: 'lazy and repetetive', price: 50000}));



const state =  store.getState();
const visibleItems = getVisibleItems(state.items, state.filters);
console.log(visibleItems);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));

 


