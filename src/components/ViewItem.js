import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm'

const ViewItem = (props) => {
    console.log(props);
    return (
        <div>
            <ItemForm 
                item={props.item}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        item: state.items.find((item) => {
            return item.id === props.match.params.id;
        })
    };
};

export default connect(mapStateToProps)(ViewItem);



