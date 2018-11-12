import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PlaceholderComponent from '../components/PlaceholderComponent'
import RouteTestComponent from '../components/RouteTestComponent'
import NotFoundPage from '../components/NotFoundPage'
import HeaderTest from '../components/HeaderTest'




const AppRouter = () => (
    <BrowserRouter>
        <div>
            <HeaderTest />
            <Switch>
                <Route path="/" component={PlaceholderComponent} exact={true}/>
                <Route path="/routetest/:id" component={RouteTestComponent} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

