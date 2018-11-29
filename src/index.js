import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetItems } from './actions/items';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

import './archive dump code/promises';

const store = configureStore(); 

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>loading...</p>, document.getElementById('app'));

store.dispatch(startSetItems()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})



 


