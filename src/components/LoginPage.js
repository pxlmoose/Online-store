import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => (
    <div>
        <h1>Login Page</h1>
        <button onClick={startLogin}>Google Login</button>
    </div>
);

const mapDispatchStateToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect (undefined, mapDispatchStateToProps)(LoginPage);
// first undefined is for state. Since we don't need state, we use indefined and move to dispatch