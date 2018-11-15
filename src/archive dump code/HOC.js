// higher order component pattern

import React from 'react';
import ReactDOM from 'react-dom';

const Generator = (props) => ( // 3. This is the component that will be passed to build HOC
    <div>
        <h1>Title</h1>
        <p>Some exmple text: {info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => { // 2. Function that takes a component as a parameter and buidl on it
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info</p>} 
            <WrappedComponent {...props} /> 
            
        </div>
    ); // ...props will "spread" all properties passed as props and pass them further
}; // becouse props have to be passed down the whole line (no redux here)

const AdminInfo = withAdminWarning(Generator); // 1. Component you want to render using a function

ReactDOM.render(<AdminInfo isAdmin={true} info='sample info' />, document.getElementById('app'));