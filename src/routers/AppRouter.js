import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ItemsList from '../components/ItemsList';
import NotFoundPage from '../components/NotFoundPage';
import Navigation from '../components/Navigation';
import ContactPage from '../components/ContactPage';
import AboutPage from '../components/AboutPage';
import Cart from '../components/Cart';
import LoginPage from '../components/LoginPage';
import Footer from '../components/Footer';
import Checkout from '../components/Checkout';
import ViewItem from '../components/ViewItem';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();



const AppRouter = () => (
    <Router history={history}>
        <div>
            <Navigation />
            <Switch>
                <Route path="/" component={ItemsList} exact={true}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/about" component={AboutPage}/>
                <PrivateRoute path="/cart" component={Cart}/>
                <PublicRoute path="/login" component={LoginPage}/>
                <Route path="/item/:id" component={ViewItem} />
                <PrivateRoute path="/checkout" component={Checkout} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </Router>
);

export default AppRouter;

