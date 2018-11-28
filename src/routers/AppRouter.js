import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ItemsList from '../components/ItemsList';
import SingleListItem from '../components/SingleListItem';
import NotFoundPage from '../components/NotFoundPage';
import Navigation from '../components/Navigation';
import ContactPage from '../components/ContactPage';
import AboutPage from '../components/AboutPage';
import Cart from '../components/Cart';
import LoginPage from '../components/LoginPage';
import Footer from '../components/Footer';
import Checkout from '../components/Checkout';
import ViewItem from '../components/ViewItem';





const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Navigation />
            <Switch>
                <Route path="/" component={ItemsList} exact={true}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/item/:id" component={ViewItem} />
                <Route path="/checkout" component={Checkout} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;

