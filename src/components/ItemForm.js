import React from 'react';


export class ItemForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            name: props.item ? props.item.name : '',
            description: props.item ? props.item.description : '',
            price: props.item ? props.item.proce : ''
        };
    }

    render() {
        return (
            <div> 
                <h1>{this.state.name}</h1>
                <p>{this.state.description}</p>
                <h3>{this.state.price}</h3>
            </div>
        );
    }
};


export default ItemForm;

