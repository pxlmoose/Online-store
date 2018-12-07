import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetItems } from './actions/items';
import { startSetCart, clearCart } from './actions/cart';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';



const store = configureStore(); 

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>loading...</p>, document.getElementById('app'));


let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetItems()).then(store.dispatch(startSetCart())).then(() => {
            renderApp();
            history.push('/');
        });
    } else {
        store.dispatch(startSetItems()).then(() => {
            store.dispatch(logout());
            store.dispatch(clearCart());
            renderApp();
            history.push('/');
        })
    }
});



 


