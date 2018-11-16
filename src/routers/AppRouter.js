import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ItemsListComponent from '../components/ItemsListComponent';
import ItemComponent from '../components/ItemComponent';
import NotFoundPage from '../components/NotFoundPage';
import NavigationComponent from '../components/NavigationComponent';
import ContactComponent from '../components/ContactComponent';
import AboutComponent from '../components/AboutComponent';
import CartComponent from '../components/CartComponent';
import LoginComponent from '../components/LoginCoponent';
import FooterComponent from '../components/FooterComponent';
import CheckoutComponent from '../components/CheckoutComponent';





const AppRouter = () => (
    <BrowserRouter>
        <div>
            <NavigationComponent />
            <Switch>
                <Route path="/" component={ItemsListComponent} exact={true}/>
                <Route path="/contact" component={ContactComponent}/>
                <Route path="/about" component={AboutComponent}/>
                <Route path="/cart" component={CartComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/item/:id" component={ItemComponent} />
                <Route path="/checkout" component={CheckoutComponent} />
                <Route component={NotFoundPage} />
            </Switch>
            <FooterComponent />
        </div>
    </BrowserRouter>
);

export default AppRouter;

