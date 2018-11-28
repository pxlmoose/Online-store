import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import { addItem } from '../actions/items';

const ViewItem = (props) => {
    //console.log(props);
    return (
        <div>
            <h1>Viewing single item</h1>
            <ItemForm 
                item={props.item}
            />
            <button onClick={() => {
                // props.dispatch(addItem(item));
                // props.history.push('/');
                console.log(props.item);
            }}>Add item</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        item: state.items.find((item) => {
            return item.id === props.match.params.id;
        }),
     };
};


export default connect(mapStateToProps)(ViewItem);



