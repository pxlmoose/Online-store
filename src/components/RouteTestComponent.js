import React from 'react'

const RouteTestComponent = (props) => (
    <div>
        <p>Testing routing to pages with their id, here id of {props.match.params.id} </p>
    </div>
);

export default RouteTestComponent;