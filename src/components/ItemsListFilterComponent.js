import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';


const ItemsListComponent = (props) => (
    <div>
        <input 
            type="text"
            placeholder="Search..." 
            autoFocus 
            value={props.filters.text} 
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }}
        />
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ItemsListComponent);