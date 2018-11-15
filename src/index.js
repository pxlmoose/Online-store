import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

// const store = configureStore(); 

// const jsx = (
//     <Provider store={store}>
//         <AppRouter />
//     </Provider>
// )
//this won't work untill you write this function in configureStore.js

ReactDOM.render(<AppRouter />, document.getElementById('app'));





