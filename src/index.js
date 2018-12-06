import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetItems } from './actions/items';
import { startSetCart } from './actions/cart';
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

// store.dispatch(startSetItems()).then(() => {
//     ReactDOM.render(jsx, document.getElementById('app'));
// });


store.dispatch(startSetItems()).then(store.dispatch(startSetCart())).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('logged in');
    } else {
        console.log('logged out');
    }
});



 


