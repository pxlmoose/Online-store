import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderTest = () => (
    <header>
        <h1>this is fixed to top navigation header</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/routetest" activeClassName="is-active">Go to test route page</NavLink>
    </header>
);

export default HeaderTest;