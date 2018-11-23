import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <header>
        <h1>this is fixed to top navigation header</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
        <NavLink to="/about" activeClassName="is-active">About</NavLink>
        <NavLink to="/cart" activeClassName="is-active">Cart</NavLink>
        <NavLink to="/login" activeClassName="is-active">Log in</NavLink>
    </header>
);

export default Navigation;